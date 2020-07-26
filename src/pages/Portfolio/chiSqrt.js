import React from "react";
import { Link } from "react-router-dom";

import "./styles/chiSqrt.css";

const chiSqrt = () => {
  return (
    <main className="chiSqrt container" id="main">
      <h1>Pruebas para números aleatorios</h1>
      <p>
        Herramienta para verificar números aleatorios, se puede encontrar
        información detallada sobre la realización de este programa en el blog
        de <Link to="/blog/1">números pseudo aleatorios</Link>, y una muestra al
        final del post, pero igual lo puedes probar en la siguiente este{" "}
        <a
          href="https://test-for-random-numbers.marcomadera.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          enlace.
        </a>
      </p>
      <img
        className="chiSqrt__image"
        src="https://res.cloudinary.com/marcomadera/image/upload/v1595276090/Potfolio/chiSqrt/chiSqrtCover_mngxy7.png"
        alt="Reporte Diario"
      />
    </main>
  );
};

export default chiSqrt;
