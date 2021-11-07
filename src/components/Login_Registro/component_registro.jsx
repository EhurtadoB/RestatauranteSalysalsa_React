import React from "react";

class Registro extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="row">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p class="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam vel
            qui libero minus praesentium ipsa at voluptas, esse rem aliquam sunt
            deleniti? Quas corrupti corporis quam repellat nostrum enim
            laudantium.
          </p>
        </div>
        <div class="row">
          <div class="col-2"></div>
          <table class="col s8 offset-s2">
            <tr>
              <td colSpan="8" class="center-align">
                <h3>REGISTRO Sal&Salsa</h3>
              </td>
            </tr>
            <tr>
              <td>
                <label class="col s12 right">Nombre</label>
              </td>
              <td>
                <input class="col s12" />
              </td>
              <td>
                <label class="col s12 right">Apellidos</label>
              </td>
              <td>
                <input class="col s12" />
              </td>
            </tr>
            <tr>
              <td>
                <label class="col s12 right">Usuario</label>
              </td>
              <td>
                <input class="col s12" />
              </td>
              <td>
                <label class="col s12 right">Contraseña</label>
              </td>
              <td>
                <input type="password" class="col s12" />
              </td>
            </tr>
            <tr>
              <td>
                <label class="col s12 right">Teléfono</label>
              </td>
              <td>
                <input type="number" class="col s12" />
              </td>
              <td>
                <label class="col s12 right">Correo</label>
              </td>
              <td>
                <input type="email" class="col s12" />
              </td>
            </tr>
            <tr>
              <td>
                <label class="col s12 right">Dirección de Residencia</label>
              </td>
              <td>
                <input class="col s12" />
              </td>
              <td>
                <p>
                  <label>
                    <input name="group1" type="radio" checked />
                    <span>Administrador</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span>Usuario</span>
                  </label>
                </p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <label>
                  <input type="checkbox" required />
                  <span>Acepto términos y condiciones</span>
                </label>
              </td>
              <td colSpan="6" class="center-align">
                <button class="btn btn-primary" type="submit" name="action">
                  Registrar
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div class="row">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p class="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam vel
            qui libero minus praesentium ipsa at voluptas, esse rem aliquam sunt
            deleniti? Quas corrupti corporis quam repellat nostrum enim
            laudantium.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Registro;
