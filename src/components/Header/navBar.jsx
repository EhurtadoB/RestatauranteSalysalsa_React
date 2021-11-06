import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const header = () => {
  return (
    <>
      <header style={{ zIndex: 1 }}>
        <nav className="navbar navbar-expand-lg navegador">
          <div className="container-fluid">
            <div className="contenedor logo-nav-container">
              <a
                className="navbar-brand logo"
                href="/inicio"
                style={{ paddingLeft: "50px" }}
              >
                sal&amp;salsa
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/nosotros">
                    NOSOTROS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/menu">
                    MENU
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/servicios">
                    SERVICIOS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Reservas">
                    RESERVAS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Login">
                    <FontAwesomeIcon className="fas" icon={faSignInAlt} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Registro">
                    <FontAwesomeIcon className="fas" icon={faUserPlus} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default header;
