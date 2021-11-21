import React from "react";

const Presentacion = () => {
  return (
    <>
      <div className="presntacion">
        <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-50efc.appspot.com/o/Restaurante%2FInicio%2Fpropuesta.png?alt=media&token=443b5046-e5cc-490a-b1c9-805ce98df4f1" alt="propuesta" />
        <div className="centrado">
          <h1>nuestra propuesta</h1>
          <p>
            Nuestra propuesta es un restaurante, es decir, ofrecer comida. Pero
            es algo muy general, por lo que decidimos apuntar a un tipo de
            cliente, y es a las personas con sobrepeso ¡Esto nos diferencia del
            resto de restaurantes comunes y corriente!
          </p>
        </div>
      </div>
    </>
  );
};

export default Presentacion;
