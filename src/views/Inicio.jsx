import React from 'react'
import AlgunosServicios from '../components/Inicio/AlgunosServicios'
import Destacados from '../components/Inicio/Destacados'
import ImgCarrusel from '../components/Inicio/ImgCarrusel'
import Presentacion from '../components/Inicio/Presentacion'
import Testimonios from '../components/Nosotros/Testimonios'
import "../components/Inicio/Styles/inicio-estilos.css"

const Inicio = () => {
    return (
        <>
            <div style={{ marginTop: 120 }}>
            <ImgCarrusel/>
            <Presentacion/>
            <Destacados/>
            <AlgunosServicios/>
            <Testimonios/>
            </div>
        </>
    )
}

export default Inicio
