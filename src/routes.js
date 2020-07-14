import { lazy } from "react";
// import challenges from "./pages/Portfolio/challenges";
// import Portfolio from "./pages/Portfolio";
// import chiSqrt from "./pages/Portfolio/chiSqrt";
// import sreExcel from "./pages/Portfolio/sreExcel";
// import About from "./pages/About";
// import PseudoRandomNumbers from "./pages/Blog/PseudoRandomNumbers";
// import Blog from "./pages/Blog/index";

const Portfolio = lazy(() => import("./pages/Portfolio"));
const sreExcel = lazy(() => import("./pages/Portfolio/sreExcel"));
const chiSqrt = lazy(() => import("./pages/Portfolio/chiSqrt"));
const challenges = lazy(() => import("./pages/Portfolio/challenges"));
const About = lazy(() => import("./pages/About"));
const PseudoRandomNumbers = lazy(() =>
  import("./pages/Blog/PseudoRandomNumbers")
);
const Blog = lazy(() => import("./pages/Blog"));

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
