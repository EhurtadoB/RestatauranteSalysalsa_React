import React from "react";
import { Link } from 'react-router-dom'

const pie = () => {
  return (
    <>
      <footer>
        <div className="contenedor">
          <div className="item_footer" id="imagen">
            <img src="./assets/Img/logo.png" alt="logo" />
            {/*-<div class="img"></div>*/}
          </div>
          <div className="item_footer" id="informacion">
            <div>
              <div className="navegador_inf">
                <ul>
                  <li>
                    <Link to="mapa.html">mapa del sitio</Link>
                  </li>
                  <li>
                    <Link to="/Contactenos">contactenos</Link>
                  </li>
                  <li>
                    <Link to="/Reservas">reservas</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  Restaurante Sal y Salsa ltda.
                  <br />
                  direccion: <br />
                  Correo: <br />
                  Telefono:
                </p>
              </div>
            </div>
          </div>
          <div className="item_footer" id="mapa">
            <iframe
              title="ubicacion"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.9375883895!2d-75.581929!3d6.166312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa36cff0cbbf71786!2sParque%20Principal%20Envigado%20Marceliano%20V%C3%A9lez%20Barreneche.!5e0!3m2!1ses!2sco!4v1631394128776!5m2!1ses!2sco"
              frameBorder={0}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default pie;
