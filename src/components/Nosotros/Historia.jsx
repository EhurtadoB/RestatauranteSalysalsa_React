import React, { useContext } from "react";
import nosotrosContext from "../../contexts/Nosotros/nosotrosContext";

const Historia = () => {
  const { datosHistoria } = useContext(nosotrosContext);
  return (
    <>
      <div>
        <div className="contenedor centro" style={{ marginTop: 100 }}>
          <div className="nuestra-historia">
            <div className="imagen-historia">
              <img alt="imagenhistoria" src={datosHistoria.imagen} />
            </div>
            <div className="texto-historia">
              <h1>{datosHistoria.titulo}</h1>
              <p>{datosHistoria.historia}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Historia;
