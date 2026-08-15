// src/components/TestimonialCard.jsx
// import React from 'react';
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
                <div className="font-semibold text-gray-800 mr-2 whitespace-nowrap">
                    {review.author}
                </div>
                <div className="flex items-center">
                    {renderStars(review.rating)}
                </div>
            </div>
            {/* Added max-h-40 and overflow-y-auto to make the text scrollable */}
            <p className="text-gray-700 mb-4 max-h-40 overflow-y-auto pr-2">
                {review.text}
            </p>
            <p className="text-sm text-gray-500 whitespace-nowrap">
                {review.date}
            </p>
        </motion.div>
    );
};

export default TestimonialCard;