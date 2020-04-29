import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Blog from "./pages/Blog.js";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <Fragment>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
    </Fragment>
  );
}

export default App;
