import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <header style={{ zIndex: 1 }}>
        <nav className="navbar navbar-expand-lg navegador">
          <div className="container-fluid">
            <div className="contenedor logo-nav-container">
              <Link
                className="navbar-brand logo"
                to="/inicio"
                style={{ paddingLeft: "50px" }}
              >
                sal&amp;salsa
              </Link>
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
                  <Link className="nav-link" to="/nosotros">
                    NOSOTROS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/menu">
                    MENU
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/servicios">
                    SERVICIOS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Reservas">
                    RESERVAS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">
                    <FontAwesomeIcon className="fas" icon={faSignInAlt} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Registro">
                    <FontAwesomeIcon className="fas" icon={faUserPlus} />
                  </Link>
                </li>
                <li className="nav-item dropdown my-auto">
                  <button
                    className="dropdown-toggle"
                    id="navbarDarkDropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    type="button"
                  >
                    Administrar
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
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
