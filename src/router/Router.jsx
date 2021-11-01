import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Nosotros from "../views/Nosotros";
import Servicios from "../views/Servicios";

const routes = [
  // { AQUI VA EL COMPONENTE DE INICIO
  //     path: "/",
  //     component:  -------
  // }
  // { AQUI VA EL COMPONENTE DE INICIO
  //     path: "/inicio",
  //     component:  -------
  // }
  {
    path: "/nosotros",
    component: Nosotros,
  },
  {
    path: "/servicios",
    component: Servicios,
  },
];
const router = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

const RouteWithSubRoutes = (route) => {
  console.log(route);
  return (
    <>
      <Route
        path={route.path}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    </>
  );
};

export default router;
