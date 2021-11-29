import React from "react";
import Constantes from "../../../constantes json/constantes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, withRouter } from "react-router-dom";

class EditarPlato extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plato: {
        id: "",
        nombre: "",
        descripcion: "",
        imagen: "",
        precio: "",
      },
    };
    // Indicarle a las funciones a quién nos referimos con "this"
    this.manejarCambio = this.manejarCambio.bind(this);
    this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
  }
  async componentDidMount() {
    // Obtener ID de URL
    const idPlato = this.props.match.params.id;
    // Llamar a la API para obtener los detalles
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/obtenerPlato.php?id=${idPlato}`
    );
    const plato = await respuesta.json();
    // "refrescar" el formulario
    this.setState({
      plato: plato,
    });
  }
  render() {
    return (
      <div className="contenedor centro" style={{marginTop:"2rem", marginBottom:"8rem"}}>
        <br />
        <br />
        <br />
        <div className="column is-one-third">
          <h1 className="is-size-3">Editando Plato</h1>
          <ToastContainer></ToastContainer>
          <form className="field" onSubmit={this.manejarEnvioDeFormulario}>
            <div className="form-group">
              <label className="label m-2" htmlFor="nombre">
                Nombre:
              </label>
              <input
                autoFocus
                required
                placeholder="Nombre"
                type="text"
                id="nombre"
                onChange={this.manejarCambio}
                value={this.state.plato.nombre}
                className="input"
              />
            </div>
            <div className="form-group">
              <label className="label m-2" htmlFor="descripcion">
                Descripción:
              </label>
              <input
                required
                placeholder="Descripción"
                type="textarea"
                id="descripcion"
                onChange={this.manejarCambio}
                value={this.state.plato.descripcion}
                className="input"
              />
            </div>
            <div className="form-group">
              <label className="label m-2" htmlFor="imagen">
                Imagen:
              </label>
              <input
                required
                placeholder="Imagen"
                type="textarea"
                id="imagen"
                onChange={this.manejarCambio}
                value={this.state.plato.imagen}
                className="input"
              />
            </div>
            <div className="form-group">
              <label className="label m-2" htmlFor="imagen">
                Precio:
              </label>
              <input
                required
                placeholder="Precio"
                type="text"
                id="precio"
                onChange={this.manejarCambio}
                value={this.state.plato.precio}
                className="input"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success mt-2">Guardar</button>
              &nbsp;
              <Link to="/platos/ver" className="btn btn-primary mt-2">
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

    const cargaUtil = JSON.stringify(this.state.plato);
    // ¡Y enviarlo!
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/actualizarPlato.php`,
      {
        method: "PUT",
        body: cargaUtil,
      }
    );
    const exitoso = await respuesta.json();
    if (exitoso) {
      toast("Plato guardado", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
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
      const platoActualizado = state.plato;
      // Si es la calificación o el nombre, necesitamos castearlo a entero
      if (clave === "precio") {
        //valor = parseFloat(valor);
      }
      // Actualizamos el valor del videojuego, solo en el campo que se haya cambiado
      platoActualizado[clave] = valor;
      return {
        plato: platoActualizado,
      };
    });
  }
}

export default withRouter(EditarPlato);
