import React, { useState } from 'react';

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
        <header className="shadow-md fixed top-0 left-0 w-full z-50"> {/* Fixed header at the top */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Site Title or Logo */}
                <div className="text-xl font-bold text-gray-800">
                    Dr. Purva Verma
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6"> {/* Hide on mobile, show on md and up */}
                    <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
                    <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
                    <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
                    <a href="#order-medicine" className="text-gray-600 hover:text-blue-600 transition duration-300">Order Medicine</a>
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
                        <a href="#contact" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Contact</a>
                        <a href="#order-medicine" className="block text-gray-600 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Order Medicine</a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;