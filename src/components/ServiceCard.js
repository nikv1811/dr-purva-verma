import React, { useState } from 'react';

const ServiceCard = ({ title, imageUrl, description, subheader }) => {
    const [showText, setShowText] = useState(false);

    const handleMouseEnter = () => {
        setShowText(true);
    };

    const handleMouseLeave = () => {
        setShowText(false);
    };

    const handleClick = () => {
        setShowText(!showText);
    };

    return (
        <div
            className="relative bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer h-96 flex flex-col" // h-96 for height
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {/* Card Header */}
            <div className="px-4 py-3 border-b border-gray-200 text-center bg-gray-50 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

                {/* Subheader - Conditionally rendered */}
                {subheader && (
                    <p className="text-sm text-gray-600 mt-1">{subheader}</p>
                )}
            </div>

            {/* Card Body - Image and Text */}
            <div className="relative flex-grow">
                {/* Image (Visible when showText is false, fades out) */}
                <img
                    src={imageUrl}
                    alt={title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showText ? 'opacity-0' : 'opacity-100'}`}
                />

                {/* Text Overlay (Visible when showText is true, fades in) */}
                {/* Removed justify-center to align content to the top */}
                <div
                    className={`absolute inset-0 p-4 bg-black bg-opacity-60 text-white flex flex-col items-center transition-opacity duration-500 overflow-y-auto ${showText ? 'opacity-100' : 'opacity-0'}`} // Removed justify-center
                >
                    {/* Text content container */}
                    <div className="text-base text-center">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;