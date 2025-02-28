import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav>
                <div className="logo">My Portfolio</div>
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰ {/* Hamburger Icon */}
                </div>
                <ul className={menuOpen ? "active" : ""} onClick={() => setMenuOpen(false)}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Certifications</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;