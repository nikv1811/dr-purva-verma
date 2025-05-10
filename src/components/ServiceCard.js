import React, { useState } from 'react';

const ServiceCard = ({ title, imageUrl, description }) => {
    // Use a state to track if the text is shown (either by hover on desktop or tap on mobile)
    const [showText, setShowText] = useState(false);

    // Handle hover for desktop
    const handleMouseEnter = () => {
        // Only set to true on mouse enter
        setShowText(true);
    };

    const handleMouseLeave = () => {
        // Only set to false on mouse leave
        setShowText(false);
    };

    // Handle click for mobile (and desktop if preferred)
    const handleClick = () => {
        // Toggle the state on click
        setShowText(!showText);
    };

    return (
        <div
            className="relative bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer h-96 flex flex-col"
            onMouseEnter={handleMouseEnter} // Use mouse enter for hover effect
            onMouseLeave={handleMouseLeave} // Use mouse leave for hover effect
            onClick={handleClick}         // Use click for tap effect (and toggle)
        >
            {/* Card Header */}
            <div className="px-4 py-3 border-b border-gray-200 text-center bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
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
                <div
                    className={`absolute inset-0 p-4 bg-black bg-opacity-60 text-white flex items-center justify-center transition-opacity duration-500 ${showText ? 'opacity-100' : 'opacity-0'}`}
                >
                    <p className="text-base text-center">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;