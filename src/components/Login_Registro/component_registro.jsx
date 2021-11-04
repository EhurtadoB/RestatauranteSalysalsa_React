import React from "react";

class Registro extends React.Component {
    render() {
        return(
            <React.Fragment>    
                <div class="row">
                    <table class="col s8 offset-s2">
                        <tr>
                            <td colSpan="8" class="center-align"><h3>REGISTRO Sal&Salsa</h3></td>
                        </tr>
                        <tr>
                            <td><label class="col s12 right">Nombre</label></td>
                            <td><input class="col s12" /></td>
                            <td><label class="col s12 right">Apellidos</label></td>
                            <td><input class="col s12" /></td>
                        </tr>
                        <tr>
                            <td><label class="col s12 right">Usuario</label></td>
                            <td><input class="col s12" /></td>
                            <td><label class="col s12 right">Contraseña</label></td>
                            <td><input type="password" class="col s12" /></td>
                        </tr>
                        <tr>
                            <td><label class="col s12 right">Teléfono</label></td>
                            <td><input type="number" class="col s12" /></td>
                            <td><label class="col s12 right">Correo</label></td>
                            <td><input type="email" class="col s12" /></td>
                        </tr>
                        <tr>
                            <td><label class="col s12 right">Dirección de Residencia</label></td>
                            <td><input class="col s12" /></td>
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
                            <td colSpan="2"><label><input type="checkbox" required/><span>Acepto términos y condiciones</span></label></td>
                            <td colSpan="6" class="center-align"><button class="btn waves-effect waves-light red darken-4" type="submit" name="action">Registrar</button></td>  
                        </tr>
                    </table> 
                </div>
            </React.Fragment>
        );
    }
}

export default Registro;