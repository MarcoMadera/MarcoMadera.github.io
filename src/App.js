import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import ThemeContext from "./ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import ProgressLoader from "./components/ProgressLoader";
import Layout from "./components/Layout";
import ErrorBoundary from "./ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const GenericBlog = lazy(() => import("./pages/Blog/GenericBlog"));

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
          <ErrorBoundary>
            <Suspense fallback={<ProgressLoader />}>
              <Switch>
                {routeComponents}
                <Route exact path="/" component={Home} />
                <Route exact path="/blog/tag/" component={Blog} />
                <Route exact path="/blog/tag/:tag" component={Blog} />
                <Route exact path="/blog/:blogId" component={GenericBlog} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </Layout>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
