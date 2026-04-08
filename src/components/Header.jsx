import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className='hdr flex items-center justify-between h-16 bg-transparent px-4 md:px-8 py-3 md:py-0 fixed top-0 left-0 right-0 z-50'>
            <div className='flex items-center'>
                <a href="https://www.youtube.com/@nexia-editz" target="_blank" rel="noopener noreferrer">
                <h1 className='text-lg md:text-3xl font-bold text-blue-500 whitespace-nowrap'><span className='text-gray-600'>〆</span>𝗡Ξ𝗫𝗜𝗔 <span className='text-gray-600'>音久</span></h1>
                </a>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex'>
                <ul className='flex space-x-4'>    
                    <li className='list'><a href="#main-1" className="text-sm text-gray-600 hover:cursor-pointer hover:text-red-500 transition-colors">Home</a></li>
                    <li className='list'><a href="#P-work" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">Project</a></li>
                    <li className='list'><a href="#about" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">About</a></li>
                    <li className='list'><a href="#channel" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">Channel</a></li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
                onClick={toggleMenu}
                className='md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1 focus:outline-none'
            >
                <span className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className='fixed top-16 left-0 right-0 bg-white shadow-lg md:hidden z-40'>
                    <ul className='flex flex-col py-4'>
                        <li className='px-4 py-2'><a href="#main-1" className="text-gray-600 hover:text-red-500 transition-colors" onClick={closeMenu}>Home</a></li>
                        <li className='px-4 py-2'><a href="#P-work" className="text-gray-600 hover:text-blue-500 transition-colors" onClick={closeMenu}>Project</a></li>
                        <li className='px-4 py-2'><a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors" onClick={closeMenu}>About</a></li>
                        <li className='px-4 py-2'><a href="#channel" className="text-gray-600 hover:text-blue-500 transition-colors" onClick={closeMenu}>Channel</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;