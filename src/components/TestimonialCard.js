// src/components/TestimonialCard.jsx
import { useState } from 'react';
import { motion } from 'framer-motion'; // Keep framer-motion here for the card animation

const StarIcon = ({ filled, size = 14 }) => (
    <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        aria-hidden="true"
        style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '2px' }}
    >
        <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill={filled ? '#fbbf24' : '#d1d5db'}
        />
    </svg>
);

const TestimonialCard = ({ review, index }) => {
    const getReviewAuthor = () => {
        const author = review?.author || review?.reviewer?.displayName;
        return typeof author === 'string' && author.trim() ? author.trim() : 'Customer';
    };
    const getReviewerPhoto = () => {
        const photo = review?.reviewer?.profilePhotoUrl
            || review?.reviewer?.profilePhoto
            || review?.profilePhotoUrl
            || review?.photoUrl;
        return typeof photo === 'string' && photo.trim() ? photo.trim() : '';
    };
    const getReviewText = () => {
        const normalizeText = (value) => {
            if (typeof value !== 'string') return '';

            const cleaned = value.trim();
            const translationMarker = '(Translated by Google)';
            const markerIndex = cleaned.indexOf(translationMarker);

            if (markerIndex !== -1) {
                const translatedText = cleaned.slice(markerIndex + translationMarker.length).trim();
                if (translatedText) {
                    return translatedText;
                }
            }

            return cleaned;
        };

        const commentText = normalizeText(review?.comment);
        if (commentText) {
            return commentText;
        }

        const directText = normalizeText(review?.text);
        if (directText) {
            return directText;
        }

        return 'No review text provided.';
    };
    const getReviewDate = () => {
        const rawDate = review?.date || review?.createTime || review?.time;
        return rawDate ? new Date(rawDate).toLocaleDateString('en-CA') : 'Recently';
    };
    const getReviewRating = () => {
        const starEnumMap = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            FOUR: 4,
            FIVE: 5,
        };

        const candidates = [
            review?.starRating?.value,
            review?.starRating,
            review?.rating,
            review?.ratingValue,
            review?.score,
            review?.stars,
        ];

        for (const candidate of candidates) {
            if (typeof candidate === 'string' && starEnumMap[candidate.toUpperCase()]) {
                return Math.min(5, Math.max(0, starEnumMap[candidate.toUpperCase()]));
            }

            const numericRating = Number(candidate);
            if (Number.isFinite(numericRating)) {
                return Math.min(5, Math.max(0, numericRating));
            }
        }

        return 0;
    };

    const reviewerName = getReviewAuthor();
    const reviewerPhoto = getReviewerPhoto();
    const [photoFailed, setPhotoFailed] = useState(false);

    const renderStars = (rating) => {
        const numericRating = Number.isFinite(Number(rating)) ? Number(rating) : 0;
        const safeRating = Math.min(5, Math.max(0, numericRating));
        const roundedRating = Math.round(safeRating);
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} aria-label={`Rating: ${safeRating} out of 5`}>
                    <StarIcon filled={i <= roundedRating} size={14} />
                </span>
            );
        }
        return stars;
    };

    return (
        <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 min-w-[300px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
        >
            <div className="flex items-center mb-4">
                {reviewerPhoto && !photoFailed ? (
                    <img
                        src={reviewerPhoto}
                        alt={`${reviewerName}'s profile`}
                        className="w-10 h-10 rounded-full object-cover mr-3 flex-shrink-0"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => setPhotoFailed(true)}
                    />
                ) : (
                    <div
                        className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold mr-3 flex-shrink-0"
                        aria-hidden="true"
                    >
                        {reviewerName.charAt(0).toUpperCase()}
                    </div>
                )}
                <div className="font-semibold text-gray-800 mr-2 whitespace-nowrap">
                    {reviewerName}
                </div>
                <div className="flex items-center">
                    {renderStars(getReviewRating())}
                </div>
            </div>
            <p className="text-gray-700 mb-4 max-h-40 overflow-y-auto pr-2">
                {getReviewText()}
            </p>
            <p className="text-sm text-gray-500 whitespace-nowrap">
                {getReviewDate()}
            </p>
        </motion.div>
    );
};

export default TestimonialCard;