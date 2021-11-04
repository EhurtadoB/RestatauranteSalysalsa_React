import React from "react";
import Comidas from "../components/Menu/Comidas";
import "../components/Servicios/Styles/estilos-servicios.css"
const Platos = () => {
  return (
    <>
      <div className="container contenedor centro" style={{ marginTop: 110  }}>
        <Comidas/>
      </div>
    </>
  );
};

export default Platos;
