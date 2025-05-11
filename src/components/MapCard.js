import React from 'react';

// const MapCard = ({ title, mapEmbed, address, timings, description }) => { // Changed prop name from mapUrl to mapEmbed
//     return (
//         <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg backdrop-blur-md">
//             {/* Card Header */}
//             <div className="px-6 py-4 md:px-8 md:py-5 border-b border-gray-300">
//                 <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
//             </div>
//             {/* Card Body */}
//             <div className="p-6 md:p-8">
//                 {/* Google Maps Embed */}
//                 <div className="mb-6 rounded-lg overflow-hidden shadow-md" dangerouslySetInnerHTML={{ __html: mapEmbed }}>
//                 </div>

//                 {/* Timings */}
//                 {timings && (
//                     <div className="text-lg text-gray-700 mb-2">
//                         <strong>Timings:</strong>
//                         <ul>
//                             {Object.entries(timings).map(([day, time]) => {
//                                 // Check if time is an object or a string and if it's not empty
//                                 const displayTime = typeof time === 'object' && time && time.start && time.end
//                                     ? `${time.start} - ${time.end}`
//                                     : typeof time === 'string' ? time : null;

//                                 if (!displayTime) return null; // Skip if displayTime is null or empty

//                                 return (
//                                     <li key={day}>
//                                         <strong>{day}:</strong> {displayTime}
//                                     </li>
//                                 );
//                             })}
//                         </ul>
//                     </div>
//                 )}
//                 <p className="text-lg text-gray-700">{description}</p>
//             </div>
//         </div>
//     );
// };

const MapCard = ({ title, mapEmbed, address, timings, description }) => {
    return (
        <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg backdrop-blur-md">
            {/* Card Header */}
            <div className="px-6 py-4 md:px-8 md:py-5 border-b border-gray-300">
                <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            </div>
            {/* Card Body */}
            <div className="p-6 md:p-8">
                {/* Google Maps Embed */}
                <div className="mb-6 rounded-lg overflow-hidden shadow-md" dangerouslySetInnerHTML={{ __html: mapEmbed }}>
                </div>

                {/* Timings */}
                {timings && (
                    <div className="text-lg text-gray-700 mb-2 text-left">
                        <strong>Timings:</strong>
                        <ul className="list-none pl-0 ">
                            {Object.entries(timings).map(([day, time]) => {
                                // Check if time is an object or a string and if it's not empty
                                const displayTime = typeof time === 'object' && time && time.start && time.end
                                    ? `${time.start} - ${time.end}`
                                    : typeof time === 'string' ? time : null;

                                if (!displayTime) return null; // Skip if displayTime is null or empty

                                return (
                                    <li key={day} className="mb-1">
                                        <strong className="mr-2">{day}:</strong> {displayTime}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
                <p className="text-lg text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default MapCard;