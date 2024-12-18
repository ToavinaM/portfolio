import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>À propos</h3>
          <p>Je suis un consultant IT passionné par la technologie et l'innovation. N'hésitez pas à me contacter pour plus d'informations.</p>
        </div>

        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Suivez-moi</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mon Portfolio - Tous droits réservés</p>
      </div>
    </footer>
  );
}
