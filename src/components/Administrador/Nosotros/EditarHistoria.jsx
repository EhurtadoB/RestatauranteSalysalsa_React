import React, { Component } from "react";
import Swal from "sweetalert2";
import Constantes from "../../../constantes json/constantes";
import { withRouter } from 'react-router-dom';
class EditarHistoria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurante: {
        id: "",
        imagen: "",
        nombre: "",
        descripcion: "",
      },
    };
    // Indicarle a las funciones a quién nos referimos con "this"
    this.manejarCambio = this.manejarCambio.bind(this);
    this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
  }
  async componentDidMount() {
    // Obtener ID de URL
    const idRestaurante = this.props.match.params.id;
    // Llamar a la API para obtener los detalles
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/restaurante.php?id=${idRestaurante}`
    );
    const restaurante = await respuesta.json();
    // "refrescar" el formulario
    this.setState({
      restaurante: restaurante,
    });
  }
  render() {
    return (
      <>
      <div className="contenedor centro" style={{ marginTop: 100 }}>
        <form className="fild" onSubmit={this.manejarEnvioDeFormulario}>
          <div className="">
            <h5 className="" id="modalHistoria">
              Edite la información de la historia
            </h5>
          </div>
          <div className="y">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nombre
              </label>
              <input
                name="nombre"
                type="text"
                className="form-control"
                id="nombre"
                value={this.state.restaurante.nombre}
                onChange={this.manejarCambio}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="descripcion"
                className="form-label"
              >
                Digite la historia
              </label>
              <textarea
                name="descripcion"
                className="form-control"
                id="descripcion"
                rows={3}
                value={this.state.restaurante.descripcion}
                onChange={this.manejarCambio}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Link de la imagen
              </label>
              <input
                name="imagen"
                type="text"
                className="form-control"
                id="imagen"
                value={this.state.restaurante.imagen}
                onChange={this.manejarCambio}
              />
            </div>
          </div>
          
            <input type="submit" onClick={()=>{console.log(this.state.restaurante)}} className="btn btn-primary"
              value = "Guardar"
            />
            <br/>
            &nbsp;
         
        </form>
        </div>
      </>
    );
  }
  async manejarEnvioDeFormulario(evento) {
    evento.preventDefault();
    // Codificar nuestro videojuego como JSON

    const cargaUtil = JSON.stringify(this.state.restaurante);
    // ¡Y enviarlo!
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/actualizarRestaurante.php`,
      {
        method: "PUT",
        body: cargaUtil,
      }
    );
    const exitoso = await respuesta.json();
    if (exitoso) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "",
        text: "Se han actualizado los datos con exito",
        showConfirmButton: false,
        timer: 2000,
      });
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
  }
  manejarCambio(evento) {
    // Extraer la clave del estado que se va a actualizar, así como el valor
    const clave = evento.target.id;
    let valor = evento.target.value;
    this.setState((state) => {
      const restauranteActualizado = state.restaurante;
      // Si es la calificación o el nombre, necesitamos castearlo a entero
      /* if (clave !== "nombre") {
            //valor = parseFloat(valor);
        } */
      // Actualizamos el valor del videojuego, solo en el campo que se haya cambiado
      restauranteActualizado[clave] = valor;
      return {
        restaurante: restauranteActualizado,
      };
    });
  }
}

export default withRouter(EditarHistoria); 
