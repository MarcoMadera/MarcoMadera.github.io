import LigadurasTipográficas from "./LigadurasTipográficas.md";
import WCAGAccesibilidad from "./WCAG.md";
import RSS from "./RSS.md";
import HTMLSemantico from "./HTML-Semantico.md";
import GithubCLI from "./Github-CLI.md";
import CSSBlog from "./CSS.md";
import GitBlog from "./git.md";
import TiposObjetosJavaScript from "./tipos-y-objetos-en-javascript.md";

export const entries = [
  {
    id: 1,
    title: "Números Pseudo Aleatorios",
    author: "Marco Madera",
    cover: {
      original:
        "https://res.cloudinary.com/marcomadera/image/upload/v1595270596/Blog/1/pseudoRandomNumbers_todtwy.jpg",
      w120:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,h_120,w_120/v1595270596/Blog/1/pseudoRandomNumbers_todtwy.jpg",
      w300:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_300/v1595270596/Blog/1/pseudoRandomNumbers_todtwy.jpg",
      w760:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595270596/Blog/1/pseudoRandomNumbers_todtwy.jpg",
    },
    coverDescription: "Tres dados",
    excerpt:
      "Los números pseudo-aleatorios son creados a partir de algoritmos matemáticos, por lo que no se puede decir que son realmente aleatorios",
    date: new Date("May 20 2020"),
    tags: ["Estadística", "Matemáticas"],
    src: null,
  },
  {
    id: 2,
    title: "Ligaduras tipográficas",
    author: "Marco Madera",
    cover: {
      original:
        "https://res.cloudinary.com/marcomadera/image/upload/v1595269475/Blog/2/LigadurasTipograficasLogo_b90rgi.png",
      w120:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,h_120,w_120/v1595269475/Blog/2/LigadurasTipograficasLogo_b90rgi.png",
      w300:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_300/v1595269475/Blog/2/LigadurasTipograficasLogo_b90rgi.png",
      w760:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595269475/Blog/2/LigadurasTipograficasLogo_b90rgi.png",
    },
    coverDescription:
      "Mano que sostiene un lápiz de madera y borra en una hoja",
    excerpt:
      "Las ligaduras tipográficas son símbolos especiales que se producen por la unión de múltiples caracteres",
    date: new Date("Jun 08 2020"),
    tags: ["Personalización"],
    src: LigadurasTipográficas,
  },
  {
    id: 3,
    title: "Accesibilidad Web",
    author: "Marco Madera",
    cover: {
      original:
        "https://res.cloudinary.com/marcomadera/image/upload/v1595294653/Blog/3/eb23bvc1b3748b34b-434b-4b343_t00lbk.jpg",
      w120:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,h_120,w_120/v1595294653/Blog/3/eb23bvc1b3748b34b-434b-4b343_t00lbk.jpg",
      w300:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_300/v1595294653/Blog/3/eb23bvc1b3748b34b-434b-4b343_t00lbk.jpg",
      w760:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595294653/Blog/3/eb23bvc1b3748b34b-434b-4b343_t00lbk.jpg",
    },
    coverDescription: "Imagen de computador",
    excerpt:
      "Las pautas de accesibilidad para el contenido para la web son recomendaciones para crear contenido web más accesible",
    date: new Date("Jul 20 2020"),
    tags: ["Accesibilidad", "Web"],
    src: WCAGAccesibilidad,
  },
  {
    id: 4,
    title: "RSS",
    author: "Marco Madera",
    cover: {
      original:
        "https://res.cloudinary.com/marcomadera/image/upload/v1597944129/Blog/4/RSS_znjs6w.png",
      w120:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,h_120,w_120/v1597944129/Blog/4/RSS_znjs6w.png",
      w300:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_300/v1597944129/Blog/4/RSS_znjs6w.png",
      w760:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1597944129/Blog/4/RSS_znjs6w.png",
    },
    coverDescription: "RSS",
    excerpt:
      "RSS es un formato para acceder a las actualizaciones de un sitio ya sea de noticias, blog, podcasts o de alguna otra característica",
    date: new Date("Aug 20 2020"),
    tags: ["Web"],
    src: RSS,
  },
  {
    id: 5,
    title: "HTML Semántico",
    author: "Marco Madera",
    cover: {
      original:
        "https://res.cloudinary.com/marcomadera/image/upload/v1599325340/Blog/5/abbc-ebeeb-cbba_vm8uju.png",
      w120:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,h_120,w_120/v1599325340/Blog/5/abbc-ebeeb-cbba_vm8uju.png",
      w300:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_300/v1599325340/Blog/5/abbc-ebeeb-cbba_vm8uju.png",
      w760:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1599325340/Blog/5/abbc-ebeeb-cbba_vm8uju.png",
    },
    coverDescription: "HTML Tags",
    excerpt:
      "HTML Semántico es el uso de HTML, pero con etiquetas, atributos y valores coherentes al contenido y estructura de nuestras páginas para que tengan un mayor significado",
    date: new Date("Sep 08 2020"),
    tags: ["HTML", "Accesibilidad", "Web"],
    src: HTMLSemantico,
  },
  {
    id: 6,
    title: "Github CLI",
    author: "Marco Madera",
    cover: {
      original:
        "https://res.cloudinary.com/marcomadera/image/upload/v1600483976/Blog/6/Octocat-removebg_wamv2v.png",
      w120:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,h_120,w_120/v1600483976/Blog/6/Octocat-removebg_wamv2v.png",
      w300:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_300/v1600483976/Blog/6/Octocat-removebg_wamv2v.png",
      w760:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1600483976/Blog/6/Octocat-removebg_wamv2v.png",
    },
    coverDescription: "Gato pulpo y signo de consola",
    excerpt:
      "Github CLI es la herramienta oficial para ejecutar todo el flujo de trabajo en github desde la línea de comandos.",
    date: new Date("Sep 20 2020"),
    tags: ["Terminal"],
    src: GithubCLI,
  },
  {
    id: 7,
    title: "CSS",
    author: "Marco Madera",
    cover: {
      original:
        "https://res.cloudinary.com/marcomadera/image/upload/v1602894559/Blog/7/css_k23ypb.png",
      w120:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,h_120,w_120/v1602894559/Blog/7/css_k23ypb.png",
      w300:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_300/v1602894559/Blog/7/css_k23ypb.png",
      w760:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1602894559/Blog/7/css_k23ypb.png",
    },
    coverDescription: "CSS Logo",
    excerpt:
      "CSS es el lenguaje que se usa para dar estilos a un documento escrito en lenguaje marcado. Con él podemos controlar los elementos en aspecto, posición y más.",
    date: new Date("Oct 20 2020"),
    tags: ["CSS", "Personalización"],
    src: CSSBlog,
  },
  {
    id: 8,
    title: "Git",
    author: "Marco Madera",
    cover: {
      original:
        "https://res.cloudinary.com/marcomadera/image/upload/v1608823033/Blog/Git/Git-logo_pr848f.png",
      w120:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,h_120,w_120/v1608823033/Blog/Git/Git-logo_pr848f.png",
      w300:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_300/v1608823033/Blog/Git/Git-logo_pr848f.png",
      w760:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1608823033/Blog/Git/Git-logo_pr848f.png",
    },
    coverDescription: "Git Logo",
    excerpt:
      "El control de versiones es un sistema que guarda los cambios en el tiempo de uno o varios archivos.",
    date: new Date("Dec 31 2020"),
    tags: ["Terminal"],
    src: GitBlog,
  },
  {
    id: 9,
    title: "Tipos y objetos en JavaScript",
    author: "Marco Madera",
    cover: {
      original:
        "https://res.cloudinary.com/marcomadera/image/upload/v1611100833/Blog/tipos-y-objetos-en-javascript/Js_ul0yih.png",
      w120:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,h_120,w_120/v1611100833/Blog/tipos-y-objetos-en-javascript/Js_ul0yih.png",
      w300:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_300/v1611100833/Blog/tipos-y-objetos-en-javascript/Js_ul0yih.png",
      w760:
        "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1611100833/Blog/tipos-y-objetos-en-javascript/Js_ul0yih.png",
    },
    coverDescription: "JavaScript Logo",
    excerpt:
      "CSS es el lenguaje que se usa para dar estilos a un documento escrito en lenguaje marcado. Con él podemos controlar los elementos en aspecto, posición y más.",
    date: new Date("Jan 27 2020"),
    tags: ["JavaScript"],
    src: TiposObjetosJavaScript,
  },
];
