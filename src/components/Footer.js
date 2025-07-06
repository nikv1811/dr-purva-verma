import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-gray-300 py-8 px-4"> {/* Dark background, light text, padding */}
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between"> {/* Centered container, flex layout */}

                {/* Social Links */}
                <div className="flex space-x-6 mb-4 md:mb-0"> {/* Flex container for icons, spacing, margin bottom on mobile */}
                    {/* Instagram Link */}
                    <a
                        href="https://www.instagram.com/_swasthya_veda" // Replace with your actual Instagram URL
                        target="_blank" // Open in a new tab
                        rel="noopener noreferrer" // Security best practice for target="_blank"
                        className="hover:text-white transition duration-300" // Hover effect
                    >
                        {/* Replace with your Instagram logo import */}
                        {/* <img src={instagramLogo} alt="Instagram" className="w-6 h-6" /> */}
                        {/* Placeholder for Instagram icon - replace with your image or SVG */}
                        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0-14.9-12-26.8-26.8-26.8-14.9 0-26.8 12-26.8 26.8s12 26.8 26.8 26.8 26.8-12 26.8-26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.8 36.2-26.2 26.2-34.4 58-36.2 93.9-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.2 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.1 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.1-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.1-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.1 9 132.1s2.7 102.7-9 132.1z" /></svg>
                    </a>

                    {/* LinkedIn Link */}
                    <a
                        href="https://www.linkedin.com/in/dr-purva-verma/" // Replace with your actual LinkedIn URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-300"
                    >
                        {/* Replace with your LinkedIn logo import */}
                        {/* <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6" /> */}
                        {/* Placeholder for LinkedIn icon - replace with your image or SVG */}
                        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.67-48.3 87.9-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                    </a>

                    {/* WhatsApp Link */}
                    <a
                        href="[Your WhatsApp Link or Phone Number]" // Replace with your actual WhatsApp link (e.g., https://wa.me/yourphonenumber)
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-300"
                    >
                        {/* Updated WhatsApp icon SVG path */}
                        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M380.9 97.1C339.7 55.8 283.2 32 224.1 32c-102 0-185.6 83.6-185.6 185.6 0 34 9.5 67.1 27.8 96.2L32 480l100.9-26.5c27.3 14.9 58 22.7 90.1 22.7h.1c102 0 185.6-83.6 185.6-185.6 0-52.7-21.6-101.4-56.1-135.9zM224.1 448.1c-25.6 0-51.1-7.7-73.1-22.4l-5.3-3.1-54.1 14.2 14.5-52.7-3.5-5.6c-15.6-25-23.9-53-23.9-81.1 0-84 68.4-152.4 152.4-152.4 40.5 0 78.3 15.8 106.8 44.3s44.3 66.3 44.3 106.8c0 84-68.4 152.4-152.4 152.4zm96.1-119.1s-4.7-2.4-6.9-3.5c-7.6-3.7-18.7-6.9-21.7-7.4c-3-.5-6.4-.2-9.2 3.5-2.7 3.7-7.6 9.5-9.2 11.5s-3.3 4.3-6.2 5.4c-2.8 1.1-5.9 1.5-9-.5-3.1-1.5-13-4.8-24.7-15.3-9.1-7.9-15.1-17.7-16.9-20.7c-1.7-3-.1-4.4 1-6.2 1.9-1.7 4.3-4.8 6.4-7.2 2-2.3 2.7-4 4.3-7.2 1.7-3.2 1.2-6-1.4-8.9c-2.7-3-6.2-7.7-9.4-10.9s-7.6-3.5-12.2-3.5c-4.7-.1-9.9.6-15.1.6s-11.5-1.9-17.4 5.9c-5.8 7.9-22.4 21.8-22.4 53.9 0 32 23.1 61.6 26.2 65.7 3.1 4.1 44.3 71.2 107.5 98.6 31.3 13.4 44.9 17.8 59.8 17.8 14.8 0 28.6-5.6 39.3-17.1 10.7-11.5 10.7-21.3 7.6-22.9s-7.6-1.5-16.6-5.8c-8.9-4.3-21-13-24.2-17.8z" /></svg>
                    </a>

                    {/* Email Link */}
                    <a
                        href="mailto:swasthyaved@gmail.com" // Replace with your actual email address
                        className="hover:text-white transition duration-300"
                    >
                        {/* More accurate Email icon SVG path */}
                        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM464 368V182.3L309.8 317.5c-23.4 19.2-53.7 19.2-77.1 0L48 182.3V368c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm"> {/* Centered text on mobile, smaller font */}
                    &copy; {currentYear} Dr. Purva Verma. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;