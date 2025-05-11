import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 px-4 bg-gray-100"> {/* Added section tag, ID, padding, background */}
            <div className="max-w-4xl mx-auto text-center"> {/* Centered content */}
                <h2 className="text-4xl font-bold text-gray-800 mb-8">About</h2> {/* Styled heading */}
                <p className="text-lg text-gray-700 leading-relaxed"> {/* Styled paragraph */}
                    Dr. Purva Verma, a gold medallist from Sri Sri College of Ayurvedic Science and Research Hospital, is a trusted name in Ayurvedic care with over seven years of experience. Renowned for her expertise in Ayurveda, Dr. Verma offers a comprehensive range of holistic treatments aimed at promoting overall well-being. She combines her deep knowledge of Ayurveda with personalized herbal remedies, Panchakarma detox, diet counseling, and lifestyle guidance, all tailored to address a wide range of health concerns, including digestive issues, chronic conditions, stress, sexual health, and preventive care. For those searching for an “Ayurveda doctor near me” in Kolkata, Dr. Purva Verma stands out as the top choice for authentic and natural healing.
                </p>
            </div>
            <div className="w-2/3 h-px bg-gray-300 mx-auto mt-12"></div> {/* Added separator */}
        </section>
    );
};

export default About;

// import React from 'react';

// const About = () => {
//     return (
//         <section id="about" className="py-16 px-4 bg-gray-50">
//             <div className="max-w-4xl mx-auto text-center">
//                 <h2 className="text-4xl font-bold text-gray-800 mb-8">About</h2>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                     Dr. Purva Verma, a gold medallist from Sri Sri College of Ayurvedic Science and Research Hospital, is a trusted name in Ayurvedic care with over seven years of experience. Renowned for her expertise in Ayurveda, Dr. Verma offers a comprehensive range of holistic treatments aimed at promoting overall well-being. She combines her deep knowledge of Ayurveda with personalized herbal remedies, Panchakarma detox, diet counseling, and lifestyle guidance, all tailored to address a wide range of health concerns, including digestive issues, chronic conditions, stress, sexual health, and preventive care. For those searching for an “Ayurveda doctor near me” in Kolkata, Dr. Purva Verma stands out as the top choice for authentic and natural healing.
//                 </p>
//             </div>

//             {/* Divider line */}
//             <div className="w-24 h-1 bg-gray-300 mt-12 mx-auto"></div> {/* Added a short, centered gray line */}

//         </section>
//     );
// };

// export default About;