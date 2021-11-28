import React, { Component } from "react";
import Constantes from "../../constantes json/constantes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Empleados extends Component {
  constructor(props) {
    super(props);
    this.state = {
        empleados: [],
    };
  }

  async componentDidMount() {
    const respuesta = await fetch(`${Constantes.RUTA_API}/obtenerEmpleados.php`);
    const empleados = await respuesta.json();
    this.setState({
      empleados: empleados,
    });
  }
  render() {
    return (
      <>
        <div className="trabajadores bg-danger bg-gradient py-5">
          <div className="row">
            {this.state.empleados.map((trabajador, index) => {
              return (
                <div
                  key={index}
                  className="trabajador d-flex flex-column col-lg-4 col-md-12 col-sm-12"
                >
                  <img
                    className="d-flex justify-content-center"
                    src={trabajador.imagen}
                    alt={trabajador.nombre}
                  />
                  <h3>{trabajador.nombre}</h3>
                  <h6>{trabajador.descripcion}</h6>
                </div>
              );
            })}
          </div>
          {/* <div className="row align-items-start">
          {Trabajadores.Fila2.map((trabajador, index2) => {
            return (
              <div key={index2} className="trabajador col">
                <img src={trabajador.Imagen} alt={trabajador.Name} />
                <h3>{trabajador.Name}</h3>
                <h6>{trabajador.Cargo}</h6>
              </div>
            );
          })}
        </div> */}
        </div>
      </>
    );
  }
}

export default Empleados;

/* {data.map(person => {
    return (
     <List.Item block key={person.id}>
        <List.Content>
          {person.firstName} and {person.lastName} 
        </List.Content>
      <List.Content>{person.phone}</List.Content>
     </List.Item>
    )
 })} */
