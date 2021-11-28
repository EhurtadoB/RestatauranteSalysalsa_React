import React from "react";
import Constantes from "../../../constantes json/constantes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
class AgregarServicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servicio: {
        nombre: "",
        descripcion: "",
        imagen: "",
      },
    };
    // Indicarle a las funciones a quién nos referimos con "this"
    this.manejarCambio = this.manejarCambio.bind(this);
    this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
  }
  render() {
    return (
      <div className="contenedor centro">
        <div className="column is-one-third">
          <h1 className="is-size-3">Agregar servicio</h1>
          <ToastContainer></ToastContainer>
          <form className="field" onSubmit={this.manejarEnvioDeFormulario}>
            <div className="form-group">
              <label className="label" htmlFor="nombre">
                Nombre:
              </label>
              <input
                autoFocus
                required
                placeholder="Nombre"
                type="text"
                id="nombre"
                onChange={this.manejarCambio}
                value={this.state.servicio.nombre}
                className="input"
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="descripcion">
                Descripción:
              </label>
              <input
                required
                placeholder="Descripción"
                type="textarea"
                id="descripcion"
                onChange={this.manejarCambio}
                value={this.state.servicio.descripcion}
                className="input"
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="imagen">
                Imagen:
              </label>
              <input
                required
                placeholder="Imagen"
                type="textarea"
                id="imagen"
                onChange={this.manejarCambio}
                value={this.state.servicio.imagen}
                className="input"
              />
            </div>
            <div className="form-group">
              <button className="button is-success mt-2">Guardar</button>
              &nbsp;
              <Link to="/servicios/ver" className="button is-primary mt-2">
                Volver
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
  async manejarEnvioDeFormulario(evento) {
    evento.preventDefault();
    // Codificar nuestro videojuego como JSON

    const cargaUtil = JSON.stringify(this.state.servicio);
    // ¡Y enviarlo!
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/servicioGuardar.php`,
      {
        method: "POST",
        body: cargaUtil,
      }
    );
    const exitoso = await respuesta.json();
    if (exitoso) {
      toast("Servicio guardado", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.setState({
        servicio: {
          nombre: "",
          descripcion: "",
          imagen: "",
        },
      });
    } else {
      toast.error("Error guardando. Intenta de nuevo");
    }
  }
  manejarCambio(evento) {
    // Extraer la clave del estado que se va a actualizar, así como el valor
    const clave = evento.target.id;
    let valor = evento.target.value;
    this.setState((state) => {
      const servicioActualizado = state.servicio;
      // Si es la calificación o el nombre, necesitamos castearlo a entero
      /* if (clave !== "nombre") {
                valor = parseFloat(valor);
            } */
      // Actualizamos el valor del videojuego, solo en el campo que se haya cambiado
      servicioActualizado[clave] = valor;
      return {
        servicio: servicioActualizado,
      };
    });
  }
}

export default AgregarServicio;
