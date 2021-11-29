import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Constantes from '../../../constantes json/constantes';
class TableServicios extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            // Si han eliminado este juego, no necesitamos mostrarlo
            eliminado: false,
        };
        this.redireccionarParaEditar = this.redireccionarParaEditar.bind(this);
        this.eliminar = this.eliminar.bind(this);
    }
    redireccionarParaEditar() {
        return <Redirect to={`/servicios/editar/${this.props.servicio.id}`} />
    }
    async eliminar() {
        const resultado = await Swal.fire({
            title: 'Confirmación',
            text: `¿Eliminar "${this.props.servicio.nombre}"?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3298dc',
            cancelButtonColor: '#f14668',
            cancelButtonText: 'No',
            confirmButtonText: 'Sí, eliminar'
        });
        // Si no confirma, detenemos la función
        if (!resultado.value) {
            return;
        }
        const respuesta = await fetch(`${Constantes.RUTA_API}/eliminarServicio.php?id=${this.props.servicio.id}`, {
            method: "DELETE",
        });
        const exitoso = await respuesta.json();
        if (exitoso) {
            toast('Servicio eliminado ', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.setState({
                eliminado: true,
            });
        } else {
            toast.error("Error eliminando. Intenta de nuevo");
        }
    }
    render() {
        if (this.state.eliminado) {
            return null;
        }
        return (
            <tr>
                <td>{this.props.servicio.nombre}</td>
                <td>{this.props.servicio.descripcion}</td>
                <td>{this.props.servicio.imagen}</td>
                <td>
                    <Link to={`/servicios/editar/${this.props.servicio.id}`} className="button is-info btn btn-info">Editar</Link>
                </td>
                <td>
                    <button onClick={this.eliminar} className="btn btn-danger">Eliminar</button>
                </td>
            </tr>

        );
    }
}

export default TableServicios;