import React from "react";
import Servicios from "../../constantes json/servicios/Servicios.json";

const Tarjetas = () => {
  return (
    <>
      <div className="card" style={{ width: "100%", zIndex: 0 }}>
        <div className="row">
          {Servicios.map((servicio, index) => {
            return (
              <div
                key={index}
                className="d-flex flex-column col-lg-6 col-md-12 col-sm-12"
              >
                <img
                  src={servicio.Imagen}
                  className="card-img-top"
                  alt={servicio.Imagen}
                />
                <div className="card-body">
                  <h5 className="card-title titulo-servicio">
                    {servicio.titulo}
                  </h5>
                  <p className="card-text texto-servicios">{servicio.texto}</p>
                  <button type="button" className="btn btn-outline-warning">
                    ¿Preguntas? Click aquí
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

export default Tarjetas;
