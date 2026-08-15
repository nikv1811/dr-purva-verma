// src/components/Testimonial.jsx
import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const getReviewRating = (review) => {
    const candidates = [
        review?.starRating?.value,
        review?.rating,
        review?.ratingValue,
        review?.score,
        review?.starRating,
    ];

    for (const candidate of candidates) {
        const numericValue = Number(candidate);
        if (Number.isFinite(numericValue)) {
            return Math.min(5, Math.max(0, numericValue));
        }
    }

    return 0;
};

const normalizeReview = (review, index) => {
    const author = review?.reviewer?.displayName || review?.author || `Customer ${index + 1}`;
    const text = review?.comment || review?.text || 'No review text provided.';
    const rating = getReviewRating(review);
    const rawDate = review?.createTime || review?.date;
    const date = rawDate ? new Date(rawDate).toLocaleDateString('en-CA') : 'Recently';
    const timestamp = rawDate ? new Date(rawDate).getTime() : 0;

    return {
        author,
        text,
        rating,
        date,
        timestamp,
    };
};

const getRelevanceScore = (review) => {
    const rating = getReviewRating(review);
    const textLength = (review.text || '').length;
    const now = Date.now();
    const daysAgo = review.timestamp ? (now - review.timestamp) / (1000 * 60 * 60 * 24) : 365;

    const ratingWeight = rating * 35;
    const recencyWeight = Math.max(0, 45 - daysAgo * 1.5);
    const detailWeight = Math.min(textLength / 6, 25);
    const qualityWeight = (review.text && review.text.length > 80 ? 10 : 0);

    return ratingWeight + recencyWeight + detailWeight + qualityWeight;
};

const sortOptions = {
    relevant: (a, b) => getRelevanceScore(b) - getRelevanceScore(a),
    newest: (a, b) => (b.timestamp || 0) - (a.timestamp || 0),
    highest: (a, b) => {
        const ratingDiff = getReviewRating(b) - getReviewRating(a);
        if (ratingDiff !== 0) return ratingDiff;
        return (b.timestamp || 0) - (a.timestamp || 0);
    },
    lowest: (a, b) => {
        const ratingDiff = getReviewRating(a) - getReviewRating(b);
        if (ratingDiff !== 0) return ratingDiff;
        return (a.timestamp || 0) - (b.timestamp || 0);
    },
};

const StarIcon = ({ filled, size = 16 }) => (
    <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        aria-hidden="true"
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
        <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill={filled ? '#fbbf24' : '#d1d5db'}
        />
    </svg>
);

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    const [sortBy, setSortBy] = useState('relevant');
    const [averageRating, setAverageRating] = useState(0);
    const [totalReviewCount, setTotalReviewCount] = useState(0);

    const renderRatingStars = (rating) => {
        const safeRating = Number.isFinite(Number(rating)) ? Number(rating) : 0;
        const clampedRating = Math.min(5, Math.max(0, safeRating));
        const roundedRating = Math.round(clampedRating);

        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} aria-label={`${clampedRating} out of 5 stars`}>
                <StarIcon filled={index < roundedRating} size={16} />
            </span>
        ));
    };

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/.netlify/functions/reviews');
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }

                const data = await response.json();
                const reviewList = Array.isArray(data?.reviews) ? data.reviews : [];
                const numericAverageRating = Number(data?.averageRating ?? 0);
                const nextAverageRating = Number.isFinite(numericAverageRating) ? numericAverageRating : 0;

                setReviews(reviewList.map(normalizeReview));
                setAverageRating(nextAverageRating);
                setTotalReviewCount(Number(data?.totalReviewCount ?? reviewList.length ?? 0));
            } catch (error) {
                console.error('Error loading reviews:', error);
                setReviews([]);
                setAverageRating(0);
                setTotalReviewCount(0);
            }
        };

        fetchReviews();
    }, []);

    const sortedReviews = [...reviews].sort(sortOptions[sortBy] || sortOptions.relevant);

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    What Our Customers Say
                </h2>

                <div className="flex flex-col items-center justify-center mb-6 gap-2">
                    <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                        <span className="flex items-center gap-1">{renderRatingStars(averageRating)}</span>
                        <span>{averageRating ? averageRating.toFixed(1) : '0.0'}</span>
                        <span className="text-sm text-gray-500">/ 5</span>
                    </div>
                    <p className="text-sm text-gray-600">
                        {totalReviewCount || reviews.length} verified reviews
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {[
                        { key: 'relevant', label: 'Most relevant' },
                        { key: 'newest', label: 'Newest' },
                        { key: 'highest', label: 'Highest rating' },
                        { key: 'lowest', label: 'Lowest rating' },
                    ].map((option) => (
                        <button
                            key={option.key}
                            type="button"
                            onClick={() => setSortBy(option.key)}
                            className={`rounded-full px-4 py-2 text-sm font-medium border transition ${
                                sortBy === option.key
                                    ? 'bg-emerald-600 text-white border-emerald-600'
                                    : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-400'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>

                <div
                    className="flex overflow-x-auto gap-6 pb-6"
                    style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(155, 155, 155, 0.5) transparent' }}
                >
                    <style>{`
                      * {
                        box-sizing: border-box;
                      }
                      *::-webkit-scrollbar {
                        width: 8px;
                      }
                      *::-webkit-scrollbar-track {
                        background: transparent;
                      }
                      *::-webkit-scrollbar-thumb {
                        background-color: rgba(155, 155, 155, 0.5);
                        border-radius: 20px;
                        border: transparent;
                      }
                    `}</style>
                    {sortedReviews.map((review, index) => (
                        <TestimonialCard
                            key={`${review.author}-${index}`}
                            review={review}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;