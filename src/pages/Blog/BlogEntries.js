import cover from "../../images/image.jpg";
import coverWebp from "../../images/image.webp";
import LigadurasTipográficas from "./LigadurasTipográficas.md";
import LigadurasTipograficasLogo from "../../images/Blog/Ligatures/LigadurasTipograficasLogo.png";

export const entries = [
  {
    id: 1,
    title: "Ligaduras tipográficas",
    author: "Marco Madera",
    cover: LigadurasTipograficasLogo,
    coverWebp: LigadurasTipograficasLogo,
    coverDescription:
      "Mano que sostiene un lápiz de madera y borra en una hoja",
    excerpt:
      "Las ligaduras tipográficas son símbolos especiales que se producen por la unión de múltiples caracteres.",
    date: "Jun 08, 2020",
    tags: ["Personalización"],
    src: LigadurasTipográficas,
  },
  {
    id: 2,
    title: "Números Pseudo Aleatorios",
    author: "Marco Madera",
    cover: cover,
    coverWebp: coverWebp,
    coverDescription: "Tres dados",
    excerpt:
      "Los números pseudo-aleatorios son creados a partir de algoritmos matemáticos, por lo que no se puede decir que son realmente aleatorios",
    date: "May 20, 2020",
    tags: ["Estadística", "Matemáticas"],
    src: null,
  },
];
