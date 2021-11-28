import React, { Component } from "react";

class Historia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eliminado: false,
    };
  }
  render() {
    return (
      <>
        <div>
          <div className="contenedor centro" style={{ marginTop: 100 }}>
            <div className="nuestra-historia">
              <div className="imagen-historia">
                <img alt="imagenhistoria" src={this.props.restaurante.imagen} />
              </div>
              <div className="texto-historia">
                <h1>{this.props.restaurante.nombre}</h1>
                <p>{this.props.restaurante.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Historia;
