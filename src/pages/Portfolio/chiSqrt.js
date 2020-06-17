import React, { Component } from "react";
import { Link } from "react-router-dom";
import reporte from "../../images/Portfolio/ChiSqrt/ChiSqrtCover.png";
import reporteWebp from "../../images/Portfolio/ChiSqrt/ChiSqrtCover.webp";
import ImageZoom from "../../components/Zoom";

import "./styles/chiSqrt.css";

export default class chiSqrt extends Component {
  render() {
    return (
      <div className="chiSqrt">
        <div className="container">
          <div className="row">
            <div className="chiSqrt__col col-11.75 col-md-8">
              <h1>Pruebas para números aleatorios</h1>
              <p>
                Herramienta para verificar números aleatorios, se puede
                encontrar información detallada sobre la realización de este
                programa en el blog de{" "}
                <Link to="/blog/2">números pseudo aleatorios</Link>, y una
                muestra al final del post.
              </p>
              <ImageZoom
                className="chiSqrt__image"
                src={reporte}
                srcWebp={reporteWebp}
                magnify={1.75}
                alt="Reporte Diario"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
