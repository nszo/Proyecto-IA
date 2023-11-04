// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services'; // Asumiendo que tienes una página de servicios

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
