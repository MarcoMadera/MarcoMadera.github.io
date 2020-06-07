import Home from "./pages/Home.js";
import Portfolio from "./pages/Portfolio.js";
import sreExcel from "./pages/Portfolio/sreExcel";
import chiSqrt from "./pages/Portfolio/chiSqrt";
import About from "./pages/About.js";
import Blog from "./pages/Blog.js";
import PseudoRandomNumbers from "./pages/Blog/PseudoRandomNumbers";
import GenericBlog from "./pages/Blog/GenericBlog";

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
    path: "/blog/2",
    component: PseudoRandomNumbers,
  },
  {
    path: "/blog/:blogId",
    component: GenericBlog,
  },
];
