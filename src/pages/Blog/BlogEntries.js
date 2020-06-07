import cover from "../../images/image.jpg";
import coverWebp from "../../images/image.webp";
import GenericBlog from "./GenericBlog.md";
import Estudios from "./Estudios.md";
import Pandemias from "./Pandemias.md";

export const entries = [
  {
    id: 1,
    title: "Cómo medir la efectividad en la que estudias",
    author: "Marco Madera",
    cover:
      "https://static01.nyt.com/images/2013/02/28/us/01thechoice-test/01thechoice-test-blog480.jpg",
    coverWebp:
      "https://static01.nyt.com/images/2013/02/28/us/01thechoice-test/01thechoice-test-blog480.jpg",
    coverDescription:
      "Mano que sostiene un lápiz de madera y borra en una hoja",
    excerpt: "Vista de prueba",
    date: "May 20, 2020",
    tags: ["Estadística", "Matemáticas"],
    src: Estudios,
  },
  {
    id: "2",
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
  {
    id: 3,
    title: "Pandemias que ha sufrido la humanidad",
    author: "Marco Madera",
    cover:
      "https://dnacenter.com/wp-content/uploads/2020/04/blog-COVID19-dna-testing-when-sick.png",
    coverWebp:
      "https://dnacenter.com/wp-content/uploads/2020/04/blog-COVID19-dna-testing-when-sick.png",
    coverDescription: "Mapa del mundo con virus",
    excerpt: "Vista de prueba",
    date: "May 20, 2020",
    tags: ["Estadística", "Matemáticas", "Ciencias"],
    src: Pandemias,
  },
  {
    id: 4,
    title: "Efectos de una vista cansada",
    author: "Marco Madera",
    cover:
      "https://www.optica2000.com/blog/wp-content/uploads/2019/10/Test-del-c%C3%ADrculo-horario-650x366.jpg",
    coverWebp:
      "https://www.optica2000.com/blog/wp-content/uploads/2019/10/Test-del-c%C3%ADrculo-horario-650x366.jpg",
    coverDescription: "Anteojos sostenidos hacia el suelo",
    excerpt: "Vista de prueba",
    date: "May 20, 2020",
    tags: ["Estadística", "Matemáticas", "Fisica"],
    src: GenericBlog,
  },
];
