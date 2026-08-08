import React from 'react';

const MapCard = ({ title, mapEmbed, address, description }) => {
    const normalizedMapEmbed = mapEmbed
        .replace(/width="[^"]*"/g, 'width="100%"')
        .replace(/style="[^"]*"/g, 'style="border:0;"');

    return (
        <div className="w-full h-full min-h-[420px] bg-white bg-opacity-80 rounded-2xl shadow-lg backdrop-blur-md flex flex-col">
            <div className="px-6 py-4 md:px-8 md:py-5 border-b border-gray-300">
                <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="map-embed mb-6 rounded-lg overflow-hidden shadow-md w-full flex-1 min-h-[320px]">
                    <div className="w-full h-full max-w-full overflow-hidden" dangerouslySetInnerHTML={{ __html: normalizedMapEmbed }} />
                </div>
                <style>{`
                    .map-embed iframe {
                        width: 100% !important;
                        min-width: 100% !important;
                        max-width: 100% !important;
                        height: 100% !important;
                        min-height: 320px !important;
                    }
                    @media (max-width: 767px) {
                        .map-embed iframe {
                            width: auto !important;
                            min-width: auto !important;
                            max-width: 100% !important;
                        }
                    }
                `}</style>
                <p className="text-lg text-gray-700 text-justify">{description}</p>
            </div>
        </div>
    );
};

export default MapCard;