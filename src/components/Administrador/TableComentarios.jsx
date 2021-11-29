import React, { Component } from "react";
import Constantes from "../../constantes json/constantes";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default class TableComentarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Si han eliminado este comentario, no necesitamos mostrarlo
      eliminado: false,
    };
    this.eliminar = this.eliminar.bind(this);
  }
  async eliminar() {
    const resultado = await Swal.fire({
      title: "Confirmación",
      text: `¿Eliminar "${this.props.comentarios.nombre}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3298dc",
      cancelButtonColor: "#f14668",
      cancelButtonText: "No",
      confirmButtonText: "Sí, eliminar",
    });
    // Si no confirma, detenemos la función
    if (!resultado.value) {
      return;
    }
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/eliminarComentario.php?id=${this.props.comentarios.id}`,
      {
        method: "DELETE",
      }
    );
    const exitoso = await respuesta.json();
    if (exitoso) {
      toast("Comentario eliminado ", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.setState({
        eliminado: true,
      });
    } else {
      toast.error("Error eliminando. Intenta de nuevo");
    }
  }
  render() {
    if (this.state.eliminado) {
      return null;
    }
    return (
      <>
        <tr>
          <td>{this.props.comentarios.comentario}</td>
          <td>
            <button onClick={this.eliminar} className="button is-danger">
              Eliminar
            </button>
          </td>
        </tr>
      </>
    );
  }
}
