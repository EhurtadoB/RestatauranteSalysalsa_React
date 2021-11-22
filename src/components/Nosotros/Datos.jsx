import React, { Component } from "react";

class Datos extends Component {
  constructor(props) {
    super(props);
    this.state = { datos: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:16371/api/empleado")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  }

  borrarEmpleado(id) {
    fetch("http://localhost:16371/api/empleado/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato eliminado");
      });
  }

  render() {
    return this.state.datos.map((data) => {
      return (
        <>
          <p key={data.id}>
            Nombre: <i>{data.nombre}</i> Descripcion: <i>{data.descripcion}</i>{" "} Imagen: <i>{data.imagen}</i>{" "} Restaurante: <i>{data.restaurante_id}</i>{" "} 
            <button onClick={() => this.borrarEmpleado(data.id)}>Eliminar</button>
          </p>
        </>
      );
    });
  }
}

export default Datos;