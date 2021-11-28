import React from "react";
import Constantes from "../../../constantes json/constantes";
import TableRestaurante from "./TableRestaurante.jsx";
class VerHistoria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantes: [],
    };
  }
  async componentDidMount() {
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/mostrarRestaurante.php`
    );
    const restaurantes = await respuesta.json();
    this.setState({
      restaurantes: restaurantes,
    });
  }
  render() {
    return (
      <div className="contenedor centro" style={{ marginTop: 100 }}>
        <div className="column">
          <h1 className="is-size-3">Información del restaurante</h1>
        </div>
        <div className="table-container">
          <table className="table is-fullwidth is-bordered">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>descripción</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {this.state.restaurantes.map((restaurante) => {
                return (
                  <TableRestaurante
                    key={restaurante.id}
                    restaurante={restaurante}
                  ></TableRestaurante>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default VerHistoria;
