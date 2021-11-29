import React from "react";
import Constantes from "../../../../constantes json/constantes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableEmpleados from "./TableEmpleados";
import { Link } from "react-router-dom";
class VerEmpleados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empleados: [],
    };
  }
  async componentDidMount() {
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/obtenerEmpleados.php`
    );
    const empleados = await respuesta.json();
    this.setState({
      empleados: empleados,
    });
  }
  render() {
    return (
      <div className="contenedor centro">
        <div className="container">
          <div className="column">
            <br />
            <br />
            <br />
            <h1 className="is-size-3">Empleados</h1>
            <ToastContainer></ToastContainer>
          </div>
          <div className="table-container">
            <table className="table is-fullwidth is-bordered">
              <thead>
                <tr>
                  <th>nombre</th>
                  <th>Cargo</th>
                  <th>imagen</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {this.state.empleados.map((empleado) => {
                  return (
                    <TableEmpleados
                      key={empleado.id}
                      empleado={empleado}
                    ></TableEmpleados>
                  );
                })}

                <div className="form-group" style={{justifyContent:"center"}}>
                  <Link
                    to="/empleados/agregar"
                    className="btn btn-outline-success"
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

export default VerEmpleados;
