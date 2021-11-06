import { Button } from "bootstrap";
import React from "react";
import platos from "../../constantes json/menu/platos.json";
import { contador } from "./menu";

const Comidas = () => {
  return (
    <>
      <div className="card" style={{ width: "100%", zIndex: 0 }}>
        <div className="row">
          {platos.map((plato, index) => {
            return (
              <div
                key={index}
                className="d-flex flex-column col-lg-6 col-md-12 col-sm-12"
              >
                <img
                  src={plato.Imagen}
                  className="card-img-top"
                  alt={plato.Imagen}
                />
                <div className="card-body">
                  <h5 className="card-title titulo-plato">
                    {plato.titulo}
                  </h5>
                  <h5 className="card-title titulo-plato">
                    {plato.precio}
                  </h5>
                  <p>{plato.ingredientes}</p>
                  <button
                    type="button"
                    id={plato.idminus}
                  >
                    - 
                  </button>
                  <input type="number" id={plato.idnum} placeholder="0"/>
                  <button
                    type="button"
                    id={plato.idplus}
                  >
                    +
                  </button>
                  <br></br><br></br>
                  <button
                    type="button"
                    id={plato.idplus}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Comidas;
