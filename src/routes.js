import Home from "./pages/Home.js";
import Portfolio from "./pages/Portfolio.js";
import sreExcel from "./pages/Portfolio/sreExcel";
import chiSqrt from "./pages/Portfolio/chiSqrt";
import About from "./pages/About.js";
import Blog from "./pages/Blog.js";
import PseudoRandomNumbers from "./pages/Blog/PseudoRandomNumbers";
import estudioEfectivo from "./pages/Blog/EstudioEfectivo";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
  {
    path: "/portfolio/sreExcel",
    component: sreExcel,
  },
  {
    path: "/portfolio/chiSqrt",
    component: chiSqrt,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/blog/Pseudo-Random-numbers",
    component: PseudoRandomNumbers,
  },
  {
    path: "/blog/estudio-efectivo",
    component: estudioEfectivo,
  },
];
