import React, { Component } from "react";

class Datos2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      nombre:"",
      descripcion:"",
      imagen:"",
      restaurante_id:"",
    };
  }


  syncIdCambios(id){
    this.setState({
      id: id
    })
  }
  syncNombreCambios(nombre){
    this.setState({
      nombre: nombre
    })
  }
  syncDescripcionCambios(descripcion){
    this.setState({
      descripcion: descripcion
    })
  }
  syncImagenCambios(imagen){
    this.setState({
      imagen: imagen
    })
  }
  syncRestCambios(restaurante_id){
    this.setState({
      restaurante_id: restaurante_id
    })
  }
  insertarEmpleado(id) {
    fetch("http://localhost:16371/api/empleado/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato eliminado");
      });
  }
  submitForm(){
    console.log(this.id);
    console.log(this.nombre);
  }

  render(){
    return (
        <>
        <form>
          <input onChange={(ev=>{ this.syncIdCambios(ev.target.value) })} type="number" value={this.state.id} placeholder="ID"/>
          <input onChange={(ev=>{ this.syncNombreCambios(ev.target.value) })} type="text" value={this.state.nombre} placeholder="Nombre"/>
          <input onChange={(ev=>{ this.syncDescripcionCambios(ev.target.value) })} type="text" value={this.state.descripcion} placeholder="Descripción"/>
          <input onChange={(ev=>{ this.syncImagenCambios(ev.target.value) })} type="text" value={this.state.imagen} placeholder="Imagen"/>
          <input onChange={(ev=>{ this.syncRestCambios(ev.target.value) })} type="number" value={this.state.restaurante_id} placeholder="Restaurante_ID"/>
          <div>
            <input onClick={()=>this.submitForm()} type="submit" value="Insertar"/>
          </div>
      </form>
        </>
    );
  }
}
export default Datos2;