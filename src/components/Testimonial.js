// src/components/Testimonial.jsx
import React from 'react';
// Removed motion import here, it's now in TestimonialCard
import reviews from '../resourceData/reviews'; // Import reviews data from the new file
import TestimonialCard from './TestimonialCard'; // Import the new TestimonialCard component

const Testimonial = () => {
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
                        <TestimonialCard
                            key={index}
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