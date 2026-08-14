const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const { connectLambda, getStore } = require('@netlify/blobs');

const CACHE_KEY = 'google_reviews_cache';

const getStoreSafely = (event = {}) => {
  try {
    if (typeof connectLambda === 'function' && event && event.blobs) {
      connectLambda(event);
    }
    return getStore('reviews-store');
  } catch (error) {
    console.warn('Netlify Blobs not configured for scheduled refresh.', error.message);
    return null;
  }
};

exports.handler = async function (event, context) {
  try {
    const store = getStoreSafely(event);

    if (!store) {
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Blob store unavailable for scheduled review refresh.' }),
      };
    }

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
        params,
      });

      const data = response.data;
      if (data.reviews && Array.isArray(data.reviews)) {
        allReviews = allReviews.concat(data.reviews);
      }

      if (data.averageRating) averageRating = data.averageRating;
      if (data.totalReviewCount) totalReviewCount = data.totalReviewCount;

      nextPageToken = data.nextPageToken || null;
    } while (nextPageToken);

    const payload = {
      reviews: allReviews,
      averageRating,
      totalReviewCount: totalReviewCount || allReviews.length,
    };

    await store.setJSON(CACHE_KEY, {
      timestamp: Date.now(),
      payload,
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        refreshed: true,
        reviewCount: allReviews.length,
      }),
    };
  } catch (error) {
    console.error('Scheduled review refresh failed:', error.response?.data || error.message);

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: 'Failed to refresh reviews',
        details: error.response?.data || error.message,
      }),
    };
  }
};
