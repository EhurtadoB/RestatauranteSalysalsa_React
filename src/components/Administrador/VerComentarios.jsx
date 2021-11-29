import React, { Component } from "react";
import Constantes from "../../constantes json/constantes";
import TableComentarios from "./TableComentarios";

export default class VerComentarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentarios: [],
    };
  }
  async componentDidMount() {
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/mostrarComentarios.php`
    );
    const comentarios = await respuesta.json();
    this.setState({
      comentarios: comentarios,
    });
  }
  render() {
    return (
      <div className="contenedor centro" style={{ marginTop: 100 }}>
        <div className="column">
          <h1 className="is-size-3">Información de comentarios</h1>
        </div>
        <div className="table-container">
          <table className="table is-fullwidth is-bordered">
            <thead>
              <tr>
                <th>Comentario</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {this.state.comentarios.map((comentarios) => {
                return (
                  <TableComentarios
                    key={comentarios.id}
                    comentarios={comentarios}
                  ></TableComentarios>
                );
              })}
            </tbody>
          </table>
          <br />
        <br />
        </div>
      </div>
    );
  }
}
