import React from "react";
import platos from "../../constantes json/menu/platos.json";

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
                  <p className="card-text texto-platos">{plato.ingredientes}</p>
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
