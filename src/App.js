import React, { Fragment, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import { routes } from "./routes";
import NotFound from "./pages/NotFound.js";
import GenericBlog from "./pages/Blog/GenericBlog";
import Home from "./pages/Home.js";
import ThemeContext from "./ThemeContext";

const App = () => {
  const routeComponents = routes.map(({ path, component }, i) => (
    <Route exact path={path} component={component} key={i} />
  ));

  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <Fragment>
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <Layout theme={theme} setTheme={setTheme}>
            <Switch>
              {routeComponents}
              <Route exact path="/" component={Home} />
              <Route exact path="/blog/:blogId" component={GenericBlog} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </ThemeContext.Provider>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
