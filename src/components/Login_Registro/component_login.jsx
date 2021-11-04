import React from "react";
//import Registro from './component_registro';

class Login extends React.Component {
    render() {
        return(
            <React.Fragment>    
                <div class="row">
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
                                <button class="btn waves-effect waves-light red darken-4" type="submit" name="action" onClick="'<Registro />'">Ingresar</button>
                            </td>
                            <td class="center-align">
                                <button class="btn waves-effect waves-light red darken-4" type="submit" name="action">Registrar</button>
                            </td>
                        </tr>
                    </table> 
                </div>
            </React.Fragment>
        );
    }
}

export default Login;