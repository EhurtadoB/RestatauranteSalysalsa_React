import React from "react";
import Rutas from "./Rutas";

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
            <Rutas/>
          </nav>
        </div>
      </header>
    </>
  );
};

export default header;
