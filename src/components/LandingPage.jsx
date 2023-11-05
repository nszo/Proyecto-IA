import React from 'react';
import './LandingPage.css'; // Asegúrate de que el nombre del archivo CSS coincida

const LandingPage = () => {
  return (
    <div className="landing-container">
{/*       <div className="header">
        <img src="" alt="" className="logo" />
        <nav className="navigation">
          <button className="nav-button">Categorías</button>
          <button className="nav-button">Contacto</button>
          <button className="nav-button">Login</button>
        </nav>
      </div> */}

      <div className="main-section">
        <div className="text-content">
          <h1>¿Qué es?</h1>
          <p>Somos una plataforma especializada en el análisis de la competencia, identificación de posibles clientes y compras fraudulentas al igual que tiene acceso a un portafolio online para encontrar el mejor precio y confiabilidad.</p>
          <div className="buttons-container">
            <button className="main-button">Leer mas</button>
            <button className="main-button">Registrarse</button>
          </div>
        </div>
        <img src="" alt="" className="illustration" />
      </div>
    </div>
  );
};

export default LandingPage;
