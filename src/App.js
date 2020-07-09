import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import { routes } from "./routes";
import NotFound from "./pages/NotFound.js";
import GenericBlog from "./pages/Blog/GenericBlog";
import Home from "./pages/Home.js";
import ThemeContext from "./ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";

const App = () => {
  const routeComponents = routes.map(({ path, component }, i) => (
    <Route exact path={path} component={component} key={i} />
  ));

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={darkMode}>
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <ScrollToTop />
          <Switch>
            {routeComponents}
            <Route exact path="/" component={Home} />
            <Route exact path="/blog/tag/:tag" component={Blog} />
            <Route exact path="/blog/:blogId" component={GenericBlog} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
