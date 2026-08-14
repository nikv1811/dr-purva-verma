const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const { connectLambda, getStore } = require('@netlify/blobs');

const CACHE_KEY = 'google_reviews_cache';
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

const getStoreSafely = (event = {}) => {
  try {
    if (typeof connectLambda === 'function' && event && event.blobs) {
      connectLambda(event);
    }
    return getStore('reviews-store');
  } catch (error) {
    console.warn('Netlify Blobs not configured; using direct fetch / fallback mode.', error.message);
    return null;
  }
};

exports.handler = async function (event, context) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
      body: '',
    };
  }

  try {
    const store = getStoreSafely(event);
    const forceRefresh = event.queryStringParameters && event.queryStringParameters.refresh === 'true';

    // 1. Check existing 24-hr cache when a Netlify Blobs store is configured
    if (!forceRefresh && store) {
      try {
        const cachedData = await store.get(CACHE_KEY, { type: 'json' });
        if (cachedData && cachedData.timestamp) {
          const age = Date.now() - cachedData.timestamp;
          if (age < CACHE_DURATION_MS) {
            console.log(`Serving all ${cachedData.payload?.reviews?.length || 0} reviews from cache (Age: ${Math.round(age / 1000 / 60)} mins)`);
            return {
              statusCode: 200,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'X-Cache': 'HIT',
              },
              body: JSON.stringify(cachedData.payload),
            };
          }
        }
      } catch (cacheError) {
        console.warn('Cache check failed; continuing without blob cache:', cacheError.message);
      }
    }

    console.log('Fetching all paginated reviews from Google...');

    // 2. Setup OAuth2 Client
    const oauth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const { token } = await oauth2Client.getAccessToken();
    const accountId = process.env.GOOGLE_ACCOUNT_ID;
    const locationId = process.env.GOOGLE_LOCATION_ID;

    // 3. Paginate through all reviews
    let allReviews = [];
    let nextPageToken = null;
    let averageRating = null;
    let totalReviewCount = 0;

    do {
      const url = `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`;
      const params = {
        pageSize: 50,
      };
      if (nextPageToken) {
        params.pageToken = nextPageToken;
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        params: params,
      });

      const data = response.data;
      if (data.reviews && Array.isArray(data.reviews)) {
        allReviews = allReviews.concat(data.reviews);
      }

      if (data.averageRating) averageRating = data.averageRating;
      if (data.totalReviewCount) totalReviewCount = data.totalReviewCount;

      nextPageToken = data.nextPageToken || null;
    } while (nextPageToken);

    const completePayload = {
      reviews: allReviews,
      averageRating: averageRating,
      totalReviewCount: totalReviewCount || allReviews.length,
    };

    console.log(`Successfully fetched total of ${allReviews.length} reviews from Google.`);

    // 4. Save aggregated list to Netlify Blobs cache only when configured
    if (store) {
      try {
        await store.setJSON(CACHE_KEY, {
          timestamp: Date.now(),
          payload: completePayload,
        });
      } catch (writeError) {
        console.warn('Failed to write reviews cache:', writeError.message);
      }
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Cache': 'MISS',
      },
      body: JSON.stringify(completePayload),
    };
  } catch (error) {
    console.error('Error fetching reviews:', error.response?.data || error.message);

    const store = getStoreSafely(event);

    if (store) {
      try {
        const fallbackData = await store.get(CACHE_KEY, { type: 'json' });
        if (fallbackData && fallbackData.payload) {
          console.warn('Serving stale cached reviews as fallback.');
          return {
            statusCode: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'X-Cache': 'STALE-FALLBACK',
            },
            body: JSON.stringify(fallbackData.payload),
          };
        }
      } catch (cacheErr) {
        console.warn('No stale cache available:', cacheErr.message);
      }
    }

    console.warn('Google reviews are unavailable; no local fallback is enabled.');

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: 'Failed to retrieve reviews',
        details: error.response?.data || error.message,
      }),
    };
  }
};