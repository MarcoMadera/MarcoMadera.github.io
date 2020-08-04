import LigadurasTipográficas from "./LigadurasTipográficas.md";
import WCAGAccesibilidad from "./WCAG.md";

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
];
