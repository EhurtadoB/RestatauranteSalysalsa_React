import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Nosotros from "./views/Nosotros";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/Nosotros" component={Nosotros} />
            {/* <Route exact path="/Servicios" component={Servicios} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
