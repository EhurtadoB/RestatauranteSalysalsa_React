import React from "react";
import { Component } from "react";
import Comentarios from "../components/Nosotros/Comentarios";
import Empleados from "../components/Nosotros/Empleados";
import Historia from "../components/Nosotros/Historia";
import "../components/Nosotros/Styles/estilos-nosotros.css";
import Testimonios from "../components/Nosotros/Testimonios";
import Constantes from "../constantes json/constantes";

class Nosotros extends Component {
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
      <>
        {this.state.restaurantes.map((restaurante) => {
          return (
            <Historia key={restaurante.id} restaurante={restaurante}></Historia>
          );
        })}
        <Empleados />
        <Testimonios />
        <Comentarios />
      </>
    );
  }
}

export default Nosotros;
