import React from "react";
import { useState } from "react";

const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);

  const inputsStateComentarios = {
    name: "",
    comment: "",
  };
  const [inputsComentarios, setInputsComentarios] = useState(
    inputsStateComentarios
  );

  const handleChangeComentarios = (valor) => {
    setComentarios(valor);
  };

  const handleChangeInputsComentarios = (name, valor) => {
    setInputsComentarios({
      ...inputsComentarios,
      [name]: valor,
    });
  };
  const handleChangeInputsComentarioss = (valor) => {
    setInputsComentarios(valor);
  };

  return (
    <>
      <div className="container">
        <div className="col-md-6 pane">
          <div className="col-md-12">
            <form className={comentarios.length !== 0 ? "mb-2" : "mb-5"}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  value={inputsComentarios?.name || ""}
                  onChange={(e) =>
                    handleChangeInputsComentarios(e.target.name, e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label>Comentario</label>
                <textarea
                  id="comment"
                  name="comment"
                  className="form-control"
                  value={inputsComentarios?.comment || ""}
                  onChange={(e) =>
                    handleChangeInputsComentarios(e.target.name, e.target.value)
                  }
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  if (inputsComentarios.name !== "") {
                    if (inputsComentarios.comment !== "") {
                      handleChangeComentarios([
                        inputsComentarios,
                        ...comentarios,
                      ]);
                      handleChangeInputsComentarioss(inputsStateComentarios);
                    } else {
                      alert("EL CAMPO COMMENT ES OBLIGATORIO");
                    }
                  } else {
                    alert("EL CAMPO NAME ES OBLIGATORIO");
                  }
                }}
                style={{ marginTop: 6, marginBottom: 6 }}
              >
                Enviar
              </button>
            </form>
            <div
              className={`col-lg-12 ${
                comentarios.length !== 0 ? "" : "d-none"
              }`}
            >
              <div className="alert alert-light">
                <h4>Comentarios</h4>
              </div>
              {comentarios.map((comentario) => {
                return (
                  <>
                    <div className="pane p-2 mb-2">
                      <h5>{comentario.name}</h5>
                      <hr
                        className="mt-0"
                        style={{ border: "1px solid #000" }}
                      />
                      <p>{comentario.comment}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comentarios;
