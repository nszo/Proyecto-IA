import React from "react";
import { Link } from "react-router-dom";
import './Inicio.css'; // Importa el archivo CSS para Home
import ContentAndCarousel  from "../components/ContentAndCarousel";
import carouselData from '../data/ContentAndCarousel.json';
import LandingPage from "../components/LandingPage";

function Inicio() {

  return (
    <>
     <LandingPage/>
      <ContentAndCarousel carouselData={carouselData} />
    </>
  );
}

export default Inicio;
