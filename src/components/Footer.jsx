// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Mercadata</h4>
          <p>Innovación y tecnología al alcance de todos.</p>
          <div className="social-media">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p><FaEnvelope /> contacto@mercadata.com</p>
          <p><FaPhone /> +1 234 567 8900</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Todos los derechos reservados © {new Date().getFullYear()} Mercadata</p>
      </div>
    </footer>
  );
}

export default Footer;
