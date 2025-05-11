// import React, { useState } from 'react';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     // Close menu when a link is clicked (useful for mobile)
//     const closeMenu = () => {
//         setIsMenuOpen(false);
//     };

//     return (
//         <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50"> {/* Fixed header at the top */}
//             <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//                 {/* Site Title or Logo */}
//                 <div className="text-xl font-bold text-gray-800">
//                     Dr. Purva Verma
//                 </div>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden md:flex space-x-6"> {/* Hide on mobile, show on md and up */}
//                     <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
//                     <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
//                     <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
//                     <a href="#order-medicine" className="text-gray-600 hover:text-blue-600 transition duration-300">Order Medicine</a>
//                 </nav>

//                 {/* Mobile Menu Button (Hamburger) */}
//                 <div className="md:hidden"> {/* Show on mobile, hide on md and up */}
//                     <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu (Dropdown) */}
//             {isMenuOpen && (
//                 <nav className="md:hidden bg-white shadow-lg"> {/* Show when menu is open on mobile */}
//                     <div className="px-4 pt-2 pb-4 space-y-2">
//                         <a href="#home" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Home</a>
//                         <a href="#about" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>About</a>
//                         <a href="#contact" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Contact</a>
//                         <a href="#order-medicine" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Order Medicine</a>
//                     </div>
//                 </nav>
//             )}
//         </header>
//     );
// };

// export default Header;

// import React, { useState } from 'react';
// // Import your logo image file here
// import logo from '../assets/logo.png'; // <-- Replace with the actual path to your logo

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     // Close menu when a link is clicked (useful for mobile)
//     const closeMenu = () => {
//         setIsMenuOpen(false);
//     };

//     return (
//         <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50"> {/* Fixed header at the top */}
//             <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//                 {/* Site Logo and Title */}
//                 {/* This div now contains the logo and the text */}
//                 <div className="flex items-center"> {/* Use flex to align logo and text horizontally */}
//                     {/* Add your logo image here */}
//                     {/* Replace the SVG with your <img> tag */}
//                     {/* <img src={logo} alt="Dr. Purva Verma Logo" className="h-8 w-auto mr-2" /> */}{" "}
//                     {/* Placeholder for logo (replace this SVG with your image) */}
//                     <svg className="w-8 h-8 text-gray-800 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
//                     </svg>


//                     <div className="text-xl font-bold text-gray-800"> {/* Text next to the logo */}
//                         Dr. Purva Verma
//                     </div>
//                 </div>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden md:flex space-x-6"> {/* Hide on mobile, show on md and up */}
//                     <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
//                     <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
//                     <a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</a> {/* Added Services link */}
//                     <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
//                     <a href="#order-medicine" className="text-gray-600 hover:text-blue-600 transition duration-300">Order Medicine</a>
//                 </nav>

//                 {/* Mobile Menu Button (Hamburger) */}
//                 <div className="md:hidden"> {/* Show on mobile, hide on md and up */}
//                     <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu (Dropdown) */}
//             {isMenuOpen && (
//                 <nav className="md:hidden bg-white shadow-lg"> {/* Show when menu is open on mobile */}
//                     <div className="px-4 pt-2 pb-4 space-y-2">
//                         <a href="#home" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Home</a>
//                         <a href="#about" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>About</a>
//                         <a href="#services" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Services</a> {/* Added Services link */}
//                         <a href="#contact" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Contact</a>
//                         <a href="#order-medicine" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Order Medicine</a>
//                     </div>
//                 </nav>
//             )}
//         </header>
//     );
// };

// export default Header;

import React, { useState } from 'react';
// Import your PNG logo image file here
import logo from '../assets/logo.png'; // <-- Replace with the actual path to your PNG logo

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when a link is clicked (useful for mobile)
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50"> {/* Fixed header at the top */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Site Logo and Title */}
                {/* This div now contains the logo and the text */}
                <div className="flex items-center"> {/* Use flex to align logo and text horizontally */}
                    {/* Add your logo image here */}
                    {/* Replace the SVG with your <img> tag, use your imported logo */}
                    {/* Example: */}
                    <img src={logo} alt="Dr. Purva Verma Logo" className="h-8 w-auto mr-2" />

                    {/* Placeholder for logo (replace this SVG with your PNG image tag) */}
                    {/* <svg className="w-8 h-8 text-gray-800 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg> */}


                    <div className="text-xl font-bold text-gray-800"> {/* Text next to the logo */}
                        Dr. Purva Verma
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6"> {/* Hide on mobile, show on md and up */}
                    <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Home</a>
                    <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>About</a>
                    <a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</a> {/* Added Services link */}
                    <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Contact</a>
                    <a href="#order-medicine" className="text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Order Medicine</a>
                </nav>

                {/* Mobile Menu Button (Hamburger) */}
                <div className="md:hidden"> {/* Show on mobile, hide on md and up */}
                    <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white shadow-lg"> {/* Show when menu is open on mobile */}
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        <a href="#home" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Home</a>
                        <a href="#about" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>About</a>
                        <a href="#services" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Services</a> {/* Added Services link */}
                        <a href="#contact" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Contact</a>
                        <a href="#order-medicine" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Order Medicine</a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;