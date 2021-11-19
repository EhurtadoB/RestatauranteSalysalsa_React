import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Inicio from "./views/Inicio";
import Nosotros from "./views/Nosotros";
import Reservas from "./views/Reservas";
import Servicios from "./views/Servicios";
import Menu from "./views/Platos";
import component_login from "./components/Login_Registro/component_login";
import component_registro from "./components/Login_Registro/component_registro";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/servicios" component={Servicios} />
            <Route exact path="/Reservas" component={Reservas} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/Login" component={component_login} />
            <Route exact path="/Registro" component={component_registro} />
            <Route exact path="/inicio" component={Inicio} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
