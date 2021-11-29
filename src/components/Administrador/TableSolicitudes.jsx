import React, { Component } from "react";

export default class tableSolicitudes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Si han eliminado este juego, no necesitamos mostrarlo
      eliminado: false,
    };
  }
  render() {
    return (
      
        <tr>
          <td>{this.props.solicitudes.asunto}</td>
          <td>{this.props.solicitudes.nombre}</td>
          <td>{this.props.solicitudes.correo}</td>
          <td>{this.props.solicitudes.mensaje}</td>
        </tr>
     
    );
  }
}
