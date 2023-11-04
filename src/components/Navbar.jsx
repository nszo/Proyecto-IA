import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">Mercadata</Link>
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/services" className="nav-item">Services</Link>
      </div>
    </nav>
  );
}

export default Navbar;
