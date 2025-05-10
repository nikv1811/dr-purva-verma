import React from 'react';
import backdrop from '../assets/medecine-bg.jpeg';
import convocation from '../assets/convocation.jpg';

const HeroSection = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-100">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center clip-diagonal"
                style={{ backgroundImage: `url(${backdrop})` }}
            />
            {/* Dark overlay + blur */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md clip-diagonal"></div>

            {/* Two cards section */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Image Card */}
                <div className="bg-gray-100 bg-opacity-80 rounded-2xl shadow-lg overflow-hidden backdrop-blur-md">
                    <img
                        src={convocation}
                        alt="Dr Purva Verma receiving an award"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Info Card */}
                <div className="bg-gray-100 bg-opacity-80 rounded-2xl shadow-lg backdrop-blur-md flex flex-col">
                    {/* Card Header */}
                    {/* Use flex justify-center to center the inline-block wrapper */}
                    <div className="px-6 py-4 md:px-8 md:py-5 border-b border-gray-300 flex justify-center">
                        {/* Wrap heading and subheader in an inline-block flex column */}
                        <div className="inline-block flex flex-col">
                            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 m-0 text-center">
                                Dr Purva Verma
                            </h2>
                            {/* Subheader */}
                            {/* Use self-end to align to the right within the flex column wrapper */}
                            <p className="text-base md:text-lg text-gray-600 mt-1 text-right self-end">
                                BAMS (M.D. Ayurveda)
                                in Swasthavritta and Yoga
                            </p>
                        </div>
                    </div>
                    {/* Card Body */}
                    <div className="p-6 md:p-8 flex-grow flex items-center justify-center">
                        <p className="text-lg md:text-xl text-gray-700 text-center">
                            Dr. Purva Verma, a gold medallist from Sri Sri College of Ayurvedic Science,
                            is a trusted Ayurvedic expert with 7+ years of experience. She offers
                            personalized herbal remedies, Panchakarma detox, diet, and lifestyle
                            guidance to treat digestive issues, chronic conditions,
                            stress, sexual health, and more, ensuring holistic and natural
                            healing in Kolkata.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;