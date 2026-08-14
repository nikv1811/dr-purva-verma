// src/components/Testimonial.jsx
import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const normalizeReview = (review, index) => {
    const author = review?.reviewer?.displayName || review?.author || `Customer ${index + 1}`;
    const text = review?.comment || review?.text || 'No review text provided.';
    const rating = review?.starRating?.value ?? review?.rating ?? 5;
    const rawDate = review?.createTime || review?.date;
    const date = rawDate ? new Date(rawDate).toLocaleDateString('en-CA') : 'Recently';

    return {
        author,
        text,
        rating,
        date,
    };
};

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/.netlify/functions/reviews');
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }

                const data = await response.json();
                const reviewList = Array.isArray(data?.reviews) ? data.reviews : [];
                setReviews(reviewList.map(normalizeReview));
            } catch (error) {
                console.error('Error loading reviews:', error);
                setReviews([]);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    What Our Customers Say
                </h2>
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
                    {!loading && reviews.length === 0 ? (
                        <p className="text-gray-500 text-center w-full">No reviews available right now.</p>
                    ) : (
                        reviews.map((review, index) => (
                            <TestimonialCard
                                key={`${review.author}-${index}`}
                                review={review}
                                index={index}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;