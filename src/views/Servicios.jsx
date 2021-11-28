import React from "react";
import Informacion from "../components/Servicios/Informacion";
import Tarjetas from "../components/Servicios/Tarjetas";
import "../components/Servicios/Styles/estilos-servicios.css"

const Servicios = () => {
  return (
    <>
      <div className="container contenedor centro" style={{ marginTop: 110  }}>
        <Informacion />
        <Tarjetas/>
      </div>
    </>
  );
};

export default Servicios;
