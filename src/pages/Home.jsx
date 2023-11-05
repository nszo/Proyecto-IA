import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Importa el archivo CSS para Home
import Card from '../components/Card';


function Home() {
  const oelo =123
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido a Mercadata{oelo}</h1>
          <p>Tu aliado en soluciones de e-commerce.</p>
          <Link to="/contact" className="hero-cta">Contáctanos</Link>
        </div>
      </section>

      <section className="features-section">
        <div className="feature">
          <h2>Plataforma Intuitiva</h2>
          <p>Administra tu negocio online con una plataforma fácil de usar.</p>
        </div>
        {/* Repite para otras características */}
      </section>

      <section className="services-section">
        <div className="service">
          <h2>Gestión de Inventario</h2>
          <p>Controla tu stock en tiempo real.</p>
        </div>
        {/* Repite para otros servicios */}
      </section>

      <section className="testimonials-section">
        <div className="testimonial">
          <p>"Mercadata ha transformado la forma en que hacemos negocios online."</p>
          <span>- Cliente Satisfecho</span>
        </div>
        {/* Repite para otros testimonios */}
      </section>

      {/* Añade más secciones según sea necesario */}


    </div>
  );
}

export default Home;
