import React from "react";
/*import Empleados from "../components/Nosotros/Empleados";*/
import Datos from "../components/Nosotros/Datos";
import Datos2 from "../components/Nosotros/Datos2";
import Historia from "../components/Nosotros/Historia";
import "../components/Nosotros/Styles/estilos-nosotros.css";
import Testimonios from "../components/Nosotros/Testimonios";

const Nosotros = () => {
  return (
    <>
      <Historia />
      {/*
      <Empleados />
      */}
      <h1>Insertar / Actualizar: </h1>
      <Datos2 />
      <h1>Lista de Empleados / Eliminar: </h1>
      <Datos />
      <Testimonios />
    </>
  );
};

export default Nosotros;
