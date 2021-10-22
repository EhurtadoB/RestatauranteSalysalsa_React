import React from "react";

const header = () => {
  return (
    <>
      <header style={{ zIndex: 1 }}>
        <div className="contenedor logo-nav-container">
          <a href="index.html" className="logo">
            sal&amp;salsa
          </a>
          <span className="ver_menu">ver menu</span>
          <nav className="navegador">
            <ul>
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
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default header;
