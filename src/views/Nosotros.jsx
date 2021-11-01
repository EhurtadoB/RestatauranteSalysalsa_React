import React from "react";
import Empleados from "../components/Nosotros/Empleados";
import Historia from "../components/Nosotros/Historia";
import "../components/Nosotros/Styles/estilos-nosotros.css";
import Testimonios from "../components/Nosotros/Testimonios";

const Nosotros = () => {
  return (
    <>
      <Historia />
      <Empleados />
      <Testimonios />
    </>
  );
};

export default Nosotros;
