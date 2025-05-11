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
                <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg overflow-hidden backdrop-blur-md">
                    <img
                        src={convocation}
                        alt="Dr Purva Verma receiving an award"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Info Card */}
                <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg backdrop-blur-md flex flex-col">
                    {/* Card Header */}
                    <div className="px-6 py-4 md:px-8 md:py-5 border-b border-gray-300 flex justify-center">
                        <div className="inline-block flex flex-col">
                            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 m-0 text-center">
                                Dr Purva Verma
                            </h2>
                            {/* Subheader */}
                            <p className="text-base md:text-lg text-gray-600 mt-1 text-center"> {/* Centered subheader */}
                                BAMS (M.D. Ayurveda) in Swasthavritta and Yoga
                            </p>
                        </div>
                    </div>
                    {/* Card Body - With Bullet Points */}
                    <div className="p-6 md:p-8 flex-grow"> {/* Removed flex items-center justify-center */}
                        {/* Bullet points for qualifications and expertise */}
                        <ul className="pl-7 list-disc list-outside text-lg md:text-xl text-gray-700 space-y-2 text-left"> {/* Styled unordered list */}
                            <li>Ayurvedic expert with {new Date().getFullYear() - 2018}+ years of experience</li>
                            <li>Gold medallist from Sri Sri College of Ayurvedic Science and Medical Research</li>
                            <li>Specializations include Garbhasanskara, Naturopathy, and Nadi Parikshana</li>
                            <li>Offers personalized Ayurvedic remedies and guidance</li>
                            <li>Providing holistic natural healing worldwide</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;