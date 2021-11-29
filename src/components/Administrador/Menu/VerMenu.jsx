import React from "react";
import Constantes from "../../../constantes json/constantes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TablePlatos from "./TablePlatos";
import { Link } from "react-router-dom";

class VerMenu extends React.Component {
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
      <div className="contenedor centro">
        <div>
          <div className="column">
            <h1 className="is-size-3">EL MENÚ</h1>
            <ToastContainer></ToastContainer>
          </div>
          <div className="table-container">
            <table className="table is-fullwidth is-bordered">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Imagen</th>
                  <th>Precio</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {this.state.platos.map((plato) => {
                  return (
                    <TablePlatos
                      key={plato.id}
                      plato={plato}
                    ></TablePlatos>
                  );
                })}
                <div className="form-group">
                  <Link
                    to="/platos/agregar"
                    className="button is-primary mt-2"
                  >
                    Agregar
                  </Link>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default VerMenu;
