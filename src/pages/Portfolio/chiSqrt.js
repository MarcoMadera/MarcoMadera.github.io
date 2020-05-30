import React, { Component } from "react";
import reporte from "../../images/Portfolio/ChiSqrt/ChiSqrtCover.jpeg";

import ImageZoom from "image-zoom-react";

import "./styles/chiSqrt.css";

export default class chiSqrt extends Component {
  render() {
    return (
      <div className="chiSqrt">
        <div className="container">
          <div className="row">
            <div className="chiSqrt__col col-11.75 col-md-8">
              <h1>Test de correlacion de chi cuadrada de Pearson</h1>
              <p>Se testea</p>
              <a href="https://githubbox.com/MarcoMadera/Chi-Sqrt-Uniform-Test">
                Test
              </a>
              <ImageZoom
                className="chiSqrt__image"
                src={reporte}
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
