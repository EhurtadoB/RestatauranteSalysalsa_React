import React, { Component } from "react";
import Constantes from "../../constantes json/constantes";

class Tarjetas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicios: [],
    };
  }
  async componentDidMount() {
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/obtenerServicios.php`
    );
    const servicios = await respuesta.json();
    this.setState({
      servicios: servicios,
    });
  }

  render() {
    return (
      <>
        <div className="card" style={{ width: "100%", zIndex: 0 }}>
          <div className="row">
            {this.state.servicios.map((servicio) => {
              return (
                <div
                  key={servicio.id}
                  className="d-flex flex-column col-lg-6 col-md-12 col-sm-12"
                >
                  <img
                    src={servicio.imagen}
                    className="card-img-top"
                    alt={servicio.imagen}
                  />
                  <div className="card-body">
                    <h5 className="card-title titulo-servicio">
                      {servicio.nombre}
                    </h5>
                    <p className="card-text texto-servicios">
                      {servicio.descripcion}
                    </p>
                    <button type="button" className="btn btn-outline-warning">
                      ¿Preguntas? Click aquí
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Tarjetas;
