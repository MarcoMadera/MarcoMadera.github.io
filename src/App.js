import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import { routes } from "./routes";
import NotFound from "./pages/NotFound.js";

function App() {
  const routeComponents = routes.map(({ path, component }, i) => (
    <Route exact path={path} component={component} key={i} />
  ));
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Switch>
            {routeComponents}
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
