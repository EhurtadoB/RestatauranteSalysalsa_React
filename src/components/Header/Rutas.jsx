import React from "react";
import { Link } from "react-router-dom";

const Rutas = () => {
  return (
    <>
      <div>
        <Link to="/nosotros" style={{marginRight:"1.5rem"}} >Nosotros</Link>
        <Link to="#" style={{marginRight:"1.5rem"}}>El menú</Link>
        <Link to="#" style={{marginRight:"1.5rem"}}>Servicios</Link>
        <Link to="#" >Contáctanos</Link>
      </div>
    </>
  );
};

export default Rutas;

/* <ul>
              <li>
                <a href="nosotros.html">Nosotros</a>
              </li>
              <li>
                <a href="menu.html">El menu</a>
              </li>
              <li>
                <a href="servicios.html">Servicios</a>
              </li>
              <li>
                <a href="contacto.html">Contáctanos</a>
              </li>
            </ul> */
