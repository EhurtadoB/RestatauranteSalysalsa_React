import React from "react";
import Swal from "sweetalert2";
import { useForm } from 'react-hook-form';

const Contacto = () => {

	const {register, handleSubmit, formState: {errors}} = useForm(); 

	const onHandleSubmit = (body, e) => {
		if(body !== null) {
			Swal.fire(
			'Gracias por contactarnos',
			'Estamos procesando tu solicitud, en unos momentos recibirás confirmación a tu correo electrónico',
			'success'
			)
			
		}
	}

	return (
		<>
			<div className="contenedor-titulo-contacto">
        		<div className="div-titulo-contacto"><h1>Contáctanos</h1></div>
    		</div> 

		    <div className="container-fluid">
		        <div className="container">              
		            <div className="row contenedor-parrafos-contacto">
		                <div className="col div-izq-contacto">
		                    <p className="paragraph mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat, cupiditate deleniti eveniet voluptate non praesentium numquam laudantium eaque quidem. Harum unde, sed iste assumenda minima eligendi eveniet quam corrupti.</p>
		                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat, cupiditate deleniti eveniet voluptate non praesentium numquam laudantium eaque quidem. Harum unde, sed iste assumenda minima eligendi eveniet quam corrupti.</p>
		                </div>
		                <div className="col">
							<form onSubmit={handleSubmit(onHandleSubmit)}>
		                        	                        
		                        <div className="mb-4">
		                            <input 
										type="text"
										className="form-control" 
										placeholder="Asunto"
										autoComplete="off"
										{...register("asunto", {required: true})}
									/>
									{errors.asunto && <span className="text-danger">(*) <small>Campo obligatorio</small></span>}
		                        </div>

		                        <div className="mb-4">
		                            <input 
										type="text" 
										className="form-control" 
										placeholder="Nombre completo"
										autoComplete="off"
										{...register("nombre", {required: true})}
									/>
									{errors.nombre && <span className="text-danger">(*) <small>Campo obligatorio</small></span>}
		                        </div>

		                        <div className="mb-4">
		                            <input 
										type="email" 
										className="form-control"
										placeholder="Correo electrónico" 
										autoComplete="off"
										{...register("correo", {required: true})}
									/>
									{errors.correo && <span className="text-danger">(*) <small>Campo obligatorio</small></span>}
		                        </div>

		                        <div className="mb-4">
		                            <textarea 
										className="form-control my-textarea" 
										rows="4" 
										placeholder="Su Mensaje"
										autoComplete="off"
										{...register("mensaje", {required: true})}>
									</textarea>
									{errors.mensaje && <span className="text-danger">(*) <small>Campo obligatorio</small></span>}
		                        </div>

		                        <div className="form-check mb-4">
		                            <input 
										className="form-check-input" 
										type="checkbox" 
										id="flexCheckDefault"
										{...register("terminos", {required: true})}
									/>
		                            <label className="form-check-label fst-italic mb-2" htmlFor="flexCheckDefault">
		                            Acepto términos y condiciones
		                            </label>
									{errors.terminos && <span className="text-danger ms-2">(*) <small>Campo obligatorio</small></span>}
		                        </div>
								
		                        <div className="btn btn-primary">
							
								<button class="btn btn-primary" type="submit">Enviar Solicitud</button>

		                           
		                        </div>
		                    </form>
		                </div>
		            </div>   
		        </div>
		    </div>
          
		</>
	)
}

export default Contacto;