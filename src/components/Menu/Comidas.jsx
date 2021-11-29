import { Button } from "bootstrap";
import React from "react";
import platos from "../../constantes json/menu/platos.json";
import { contador } from "./menu";
import Constantes from "../../constantes json/constantes";
import { Component } from "react";

class Comidas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platos: [],
    };
  }
  async componentDidMount() {
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/obtenerPlatos.php`
    );
    const platos = await respuesta.json();
    this.setState({
      platos: platos,
    });
  }

  render() {
    return (
      <>
        <div className="card text-dark bg-light mb-3" style={{ width: "100%", zIndex: 0}}>
          <div className="row">
          {this.state.platos.map((plato) => {
              return (
                <div
                  key={platos.id}
                  className="d-flex flex-column col-lg-6 col-md-12 col-sm-12"
                >
                  <img
                    src={plato.imagen}
                    className="card-img-top"
                    alt={plato.imagen}
                    style={{width:"100%", height:"50%"}}
                  />
                  <div className="card-body">
                    <h5 className="card-title titulo-plato">{plato.nombre}</h5>
                    <h5 className="card-title titulo-plato">$ {plato.precio}</h5>
                    <p>{plato.descripcion}</p>
                    <button type="button" id={plato.idminus}>
                      -
                    </button>
                    <input type="number" id={plato.idnum} placeholder="0" />
                    <button type="button" id={plato.idplus}>
                      +
                    </button>
                    <br></br>
                    <br></br>
                    <button type="button" id={plato.idplus}>
                      Agregar al carrito
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

export default Comidas;
