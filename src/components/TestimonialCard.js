// src/components/TestimonialCard.jsx
// import React from 'react';
import { motion } from 'framer-motion'; // Keep framer-motion here for the card animation

const TestimonialCard = ({ review, index }) => {
    // Function to render star rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(
                    <span key={i} className="text-yellow-400">
                        ★
                    </span>
                );
            } else {
                stars.push(
                    <span key={i} className="text-gray-300">
                        ★
                    </span>
                );
            }
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