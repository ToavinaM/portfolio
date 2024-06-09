import React, { useState, useEffect } from 'react';
import './Header.css'; // Assurez-vous d'importer votre CSS
import { scrollToSection } from '../Utils/utils';

const Header = () => {
    const [headerHeight, setHeaderHeight] = useState(100); // Hauteur initiale du header
    const [headerBackground, setHeaderBackground] = useState(''); // Pas de couleur initiale du header

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const newHeight = Math.max(50, 100 - scrollTop); // Réduire la hauteur jusqu'à un minimum de 50px
            setHeaderHeight(newHeight);

            if (scrollTop > 0) {
                setHeaderBackground('#333333'); // Changer la couleur à noir lors du défilement
            } else {
                setHeaderBackground(''); // Enlever la couleur en haut de la page
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div
            className="containerHeader"
            style={{
                height: `${headerHeight}px`,
                backgroundColor: headerBackground,
                transition: 'height 0.3s ease, background-color 0.3s ease'
            }}
        >
            <div className="header-left">
                {/* <img src="path/to/your/logo.png" alt="Logo" className="logo" /> */}
                <span className="header-item">Ranarilala Toavina</span>
            </div>
            <div className="header-right">
                <span className="header-item" onClick={() => { scrollToSection('about') }}>About</span>
                <span className="header-item" onClick={() => { scrollToSection('experience') }}>Experience</span>
                <span className="header-item" onClick={() => { scrollToSection('passion') }}>Passion</span>
                <span className="header-item" onClick={() => { scrollToSection('contact') }}>Contact</span>
                <span className="header-item" onClick={() => { scrollToSection('work') }}>Work</span>
            </div>
        </div>
    );
};

export default Header;
