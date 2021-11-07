import React from "react";

//import Registro from './component_registro';

class Login extends React.Component {
    render() {
        return(
            <React.Fragment>  
                <div class="row">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam vel qui libero minus praesentium ipsa at voluptas, esse rem aliquam sunt deleniti? Quas corrupti corporis quam repellat nostrum enim laudantium.</p>
                </div>
                <div class="row">
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="col-3"></div>
                    <table class="col s6 offset-s3">
                        <tr>
                            <td colSpan="2"><h3 class="center-align">LOG IN Sal&Salsa</h3></td>
                        </tr>
                        <tr>
                            <td><label class="right">Usuario</label></td>
                            <td><input type="text" id="usuario_login" /></td>
                        </tr>
                        <tr>
                            <td><label class="right">Contraseña</label></td>
                            <td><input type="password" id="pass_login" /></td>
                        </tr>
                        <tr>
                            <td class="center-align">
                                <label>
                                    <input name="group1" type="radio" checked />
                                    <span>Administrador</span>
                                </label>
                            </td>
                            <td class="center-align">
                                <label>
                                    <input name="group1" type="radio" />
                                    <span>Usuario</span>
                                </label>
                            </td> 
                        </tr>
                        <tr>
                            <td class="center-align">
                                <button class="btn btn-primary" type="submit" name="action" onClick="'<Registro />'">Ingresar</button>
                            </td>
                            <td class="center-align">
                                <button class="btn btn-primary" type="submit" name="action">Registrar</button>
                            </td>
                        </tr>
                    </table> 
                </div>
                <div class="row">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam vel qui libero minus praesentium ipsa at voluptas, esse rem aliquam sunt deleniti? Quas corrupti corporis quam repellat nostrum enim laudantium.</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;