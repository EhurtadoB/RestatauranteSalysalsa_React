import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import nosotrosContext from "../../contexts/Nosotros/nosotrosContext";

const ModalHistoria = () => {
  const initialStateHistoria = {
    imagen: "",
    titulo: "",
    historia: "",
  };
  const [inputsDatosHistoria, setInputsDatosHistoria] =
    useState(initialStateHistoria);

  const handleInputChangeDatosHistoria = (e) => {
    setInputsDatosHistoria({
      ...inputsDatosHistoria,
      [e.target.name]: e.target.value,
    });
  };
  const handleReiniciarCamposInputs = () => {
    setInputsDatosHistoria(initialStateHistoria);
  };
  const { datosHistoria, handleChangeDatosHistoria } =
    useContext(nosotrosContext);
  return (
    <>
      <div
        className="modal fade"
        id="modalHistoria"
        tabIndex={-1}
        aria-labelledby="modalHistoria"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalHistoria">
                Edite la información de la historia
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Título
                </label>
                <input
                  name="titulo"
                  type="text"
                  className="form-control"
                  id="tituloHistoria"
                  value={inputsDatosHistoria.titulo}
                  onChange={handleInputChangeDatosHistoria}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Digite la historia
                </label>
                <textarea
                  name="historia"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  value={inputsDatosHistoria.historia}
                  onChange={handleInputChangeDatosHistoria}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Link de la imagen
                </label>
                <input
                  name="imagen"
                  type="text"
                  className="form-control"
                  id="imagen"
                  value={inputsDatosHistoria.imagen}
                  onChange={handleInputChangeDatosHistoria}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  if (
                    inputsDatosHistoria.historia !== "" &&
                    inputsDatosHistoria.titulo !== "" &&
                    inputsDatosHistoria.imagen !== ""
                  ) {
                    Swal.fire({
                      position: "center",
                      icon: "question",
                      title: "¿Desea actualizar la información?",
                      text: "",
                      showConfirmButton: true,
                      showCancelButton: true,
                      confirmButtonText: "Aceptar",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        handleChangeDatosHistoria(inputsDatosHistoria);
                        Swal.fire({
                          position: "center",
                          icon: "success",
                          title: "",
                          text: "Se han actualizado los datos con exito",
                          showConfirmButton: false,
                          timer: 2000,
                        });
                        handleReiniciarCamposInputs();
                      } else {
                        Swal.fire({
                          position: "center",
                          icon: "error",
                          title: "",
                          text: "No se han actualizado los datos",
                          showConfirmButton: false,
                          timer: 2000,
                        });
                      }
                    });
                  } else {
                    Swal.fire({
                      position: "center",
                      icon: "warning",
                      title: "",
                      text: "No puedes dejar campos sin llenar",
                      showConfirmButton: false,
                      timer: 2000,
                    });
                  }
                }}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalHistoria;
