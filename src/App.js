import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import { routes } from "./routes";
import NotFound from "./pages/NotFound.js";
import GenericBlog from "./pages/Blog/GenericBlog";
import Home from "./pages/Home.js";

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
            <Route exact path="/" component={Home} />
            <Route exact path="/blog/:blogId" component={GenericBlog} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
