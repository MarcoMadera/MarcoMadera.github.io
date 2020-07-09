import Portfolio from "./pages/Portfolio.js";
import sreExcel from "./pages/Portfolio/sreExcel";
import chiSqrt from "./pages/Portfolio/chiSqrt";
import challenges from "./pages/Portfolio/challenges";
import About from "./pages/About.js";
import Blog from "./pages/Blog";
import PseudoRandomNumbers from "./pages/Blog/PseudoRandomNumbers";

export const routes = [
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
    path: "/portfolio/challenges",
    component: challenges,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/blog/1",
    component: PseudoRandomNumbers,
  },
];
