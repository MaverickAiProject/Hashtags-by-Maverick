import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <img className='nav-logo' src={assets.hashtag_logo} alt="logo" />

            {/* Desktop Menu */}
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#ai-tools">AI Tools</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#our-services">Our Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            {/* Mobile Menu Toggle Icon */}
            <div className='nav-icon' onClick={toggleMenu}>
                {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </div>
        </div>
    );
};

export default Navbar;
