import React from 'react';
import { motion } from 'framer-motion';

const Testimonial = () => {
    // Static review data
    const reviews = [
        { author: "John Doe", text: "Great experience! Highly recommended.", rating: 5, date: "2024-01-20" },
        { author: "Jane Smith", text: "Excellent service and knowledgeable staff.", rating: 4, date: "2024-02-15" },
        { author: "David Lee", text: "Good products and fast delivery.", rating: 4, date: "2024-03-10" },
        { author: "Sarah Williams", text: "The team was very helpful and responsive.", rating: 5, date: "2024-04-01" },
        { author: "Michael Brown", text: "I had a great consultation experience.", rating: 5, date: "2024-05-22" },
        { author: "Emily Wilson", text: "Quick and easy ordering process.", rating: 4, date: "2024-06-18" },
        { author: "Kevin Davis", text: "Authentic products and reliable service.", rating: 5, date: "2024-07-05" },
        { author: "Jessica Rodriguez", text: "Impressed with the quality of service.", rating: 4, date: "2024-08-12" },
        { author: "Brian Martinez", text: "Will definitely use again!", rating: 5, date: "2024-09-29" },
        { author: "Linda Anderson", text: "Very satisfied with my purchase.", rating: 4, date: "2024-10-25" },
    ];

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
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    What Our Customers Say
                </h2>
                <div
                    className="flex overflow-x-auto gap-6 pb-6"
                    style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(155, 155, 155, 0.5) transparent' }} // For Firefox
                >
                    {/* Style for Chrome, Safari and Edge */}
                    <style jsx global>{`
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
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 min-w-[300px]" // Increased width for better readability
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
                            <p className="text-gray-700 mb-4">
                                {review.text}
                            </p>
                            <p className="text-sm text-gray-500 whitespace-nowrap">
                                {review.date}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
