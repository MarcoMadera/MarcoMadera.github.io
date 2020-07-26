import React from "react";
import "./styles/About.css";
import MetaData from "../components/MetaData";
const About = () => {
  return (
    <main className="About container" id="main">
      <MetaData
        title="Marco Madera | Sobre mí"
        description="Aquí puedes ver información sobre mí"
      />
      <h1 className="About__title">Sobre mí</h1>
      <p>
        ¡Hola! Mi nombre es Marco Madera tengo 23 años, actualmente soy auxiliar
        administrativo en la secretaria de relaciones exteriores, programador
        web frontend por afición y entusiasta de las tecnología web que cada día
        me apasionan más: JavaScript, Node.js, React, etc... Estoy en constante
        proceso de aprendizaje sobre las nuevas tecnologías y me gusta estar
        informado de lo que pasa en la web, ver cursos, leer artículos y
        tutoriales. Trataré de compartir mis conocimientos en la sección de
        blog, misma que trataré como libreta personal para futuro con temas
        relacionados a la programación.
      </p>
    </main>
  );
};

export default About;
