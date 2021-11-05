import React, { useState } from "react";
import { sendMail } from "./enviar_email_reservas";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Formulario = () => {
  const initialReserva = {
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    servicio: "",
    num_personas: "",
    fecha: "",
    terminos: "",
  };

  const [form, setForm] = useState(initialReserva);

  const enviarCorreo = (formul) => {
    sendMail(formul);
    MySwal.fire("Reserva exitosa").then((result) => {
      console.log(result);
      if (result.isConfirmed || result.isDismissed) {
        setForm(initialReserva);
      }
    });
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    enviarCorreo(form);
  };

  return (
    <>
      <h1
        style={{
          marginTop: 20,
          textAlign: "center",
          fontFamily:
            'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
          color: "brown",
          marginBottom: 30,
        }}
      >
        Realiza tu Reserva
      </h1>

      <form onSubmit={handleSubmit} id="reservas">
        <div
          className="form-row"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="form-group col-md-6">
            <label
              htmlFor="nombres"
              style={{
                color: "maroon",
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: "1.5rem",
              }}
            >
              Nombres:
            </label>
            <div className="row">
              <div className="col">
                <input
                  id="nombres"
                  name="nombres"
                  type="text"
                  value={form.nombres}
                  className="form-control"
                  placeholder="Nombres"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <br />
          <div className="form-group col-md-6">
            <label
              htmlFor="apellidos"
              style={{
                color: "maroon",
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: "1.5rem",
              }}
            >
              Apellidos:
            </label>
            <div className="row">
              <div className="col">
                <input
                  id="apellidos"
                  type="text"
                  name="apellidos"
                  value={form.apellidos}
                  className="form-control"
                  placeholder="Apellidos"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <br />
          <div className="form-group col-md-4">
            <label
              htmlFor="email"
              style={{
                color: "maroon",
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: "1.5rem",
              }}
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-group col-md-4">
            <label
              htmlFor="telefono"
              style={{
                color: "maroon",
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: "1.5rem",
              }}
            >
              Teléfono:
            </label>
            <input
              name="telefono"
              id="telefono"
              type="number"
              value={form.telefono}
              className="form-control"
              placeholder="Teléfono"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-group col-md-4">
            <label
              className="my-1 mr-2"
              htmlFor="servicio"
              style={{
                color: "maroon",
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: "1.5rem",
              }}
            >
              Servicio a Reservar:
            </label>
            <select
              name="servicio"
              onChange={handleChange}
              defaultValue=""
              value={form.servicio}
            >
              <option value="">seleccione...</option>
              <option value="Celebracion de cumpleaños">
                Celebracion de cumpleaños
              </option>
              <option value="Aniversario">Aniversario</option>
              <option value="Fiestas infantiles">Fiestas infantiles</option>
              <option value="Declaraciones o propuestas">
                Declaraciones o propuestas
              </option>
              <option value="Despedidas">Despedidas</option>
              <option value="Cena con amigos">Cena con amigos</option>
            </select>
          </div>
          <br />
          <div className="form-group col-md-4">
            <label
              htmlFor="num_personas"
              style={{
                color: "maroon",
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: "1.5rem",
              }}
            >
              Número de Personas:
            </label>
            <input
              min={1}
              id="num_personas"
              name="num_personas"
              type="number"
              value={form.num_personas}
              className="form-control"
              placeholder="Número de Personas"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-group col-md-4">
            <label
              htmlFor="fecha"
              style={{
                color: "maroon",
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: "1.5rem",
              }}
            >
              Fecha y Hora:
            </label>
            <br />
            <input
              id="fecha"
              type="datetime-local"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-group col-md-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                name="terminos"
                value={form.terminos}
                onChange={handleChecked}
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Acepto términos y condiciones
              </label>
            </div>
            <br />
            <button
              id="submit-reservas"
              type="submit"
              className="btn btn-primary"
            >
              Finalizar
            </button>
          </div>
        </div>
      </form>
      <br />
    </>
  );
};

export default Formulario;
