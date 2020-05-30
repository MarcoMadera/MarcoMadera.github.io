import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import Home from "./pages/Home.js";
import Portfolio from "./pages/Portfolio.js";
import sreExcel from "./pages/Portfolio/sreExcel";
import chiSqrt from "./pages/Portfolio/chiSqrt";
import About from "./pages/About.js";
import Blog from "./pages/Blog.js";
import PseudoRandomNumbers from "./pages/Blog/PseudoRandomNumbers";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/portfolio/sreExcel" component={sreExcel} />
            <Route exact path="/portfolio/chiSqrt" component={chiSqrt} />
            <Route exact path="/blog" component={Blog} />
            <Route
              exact
              path="/blog/Pseudo-Random-numbers"
              component={PseudoRandomNumbers}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
