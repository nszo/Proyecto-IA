// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="#">
              <img src="src/assets/isotipo.png" alt="Logo de SLee Dw" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>un grupo de estudiantes que tienen la visión de crear un negocio o una empresa</p>
          <p>motivados por la oportunidad de crear algo nuevo y de tener un impacto positivo</p>
          <br />
          <p>estudiantes que están llenos de ideas innovadoras.</p>
          <p>estudiantes que están unidos por un objetivo común.</p>
          <p>llenos de energía y entusiasmo.</p>
          <p>aprendiendo y creciendo.</p>
        </div>
        <div className="box">
          <h2>SIGUENOS</h2>
          <div className="red-social">
            <a href="#" className="fa fa-facebook"><FaFacebookF /></a>
            <a href="#" className="fa fa-instagram"><FaInstagram /></a>
            <a href="#" className="fa fa-twitter"><FaTwitter /></a>
          </div>
          <div className="red-social">
            <a href="#" className="fa fa-facebook"><FaFacebookF /></a>
            <a href="#" className="fa fa-instagram"><FaInstagram /></a>
            <a href="#" className="fa fa-twitter"><FaTwitter /></a>
          </div>
          <div className="red-social">
            <a href="#" className="fa fa-facebook"><FaFacebookF /></a>
            <a href="#" className="fa fa-instagram"><FaInstagram /></a>
            <a href="#" className="fa fa-twitter"><FaTwitter /></a>
          </div>
          <div className="red-social">
            <a href="#" className="fa fa-facebook"><FaFacebookF /></a>
            <a href="#" className="fa fa-instagram"><FaInstagram /></a>
            <a href="#" className="fa fa-twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>Todos los derechos reservados © {new Date().getFullYear()} <b>Mercadata</b></small>
      </div>
    </footer>
  );
}

export default Footer;
