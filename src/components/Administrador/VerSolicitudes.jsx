import React, { Component } from "react";
import Constantes from "../../constantes json/constantes";
import TableSolicitudes from "./TableSolicitudes.jsx";

export default class VerSolicitudes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solicitudes: [],
    };
  }
  async componentDidMount() {
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/mostrarSolicitudes.php`
    );
    const solicitudes = await respuesta.json();
    this.setState({
      solicitudes: solicitudes,
    });
  }
  render() {
    return (
      <div className="contenedor centro" style={{ marginTop: 100 }}>
        <div className="column">
          <h1 className="is-size-3">Información de solicitudes</h1>
        </div>
        <div className="table-container">
          <table className="table is-fullwidth is-bordered">
            <thead>
              <tr>
                <th>Asunto</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Mensaje</th>
              </tr>
            </thead>
            <tbody>
              {this.state.solicitudes.map((solicitudes) => {
                return (
                  <TableSolicitudes
                    key={solicitudes.id}
                    solicitudes={solicitudes}
                  ></TableSolicitudes>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
