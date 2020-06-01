import React, { Component } from "react";
import data from "../../images/Portfolio/SRE/Data.png";
import dataWebp from "../../images/Portfolio/SRE/Data.webp";
import reporte from "../../images/Portfolio/SRE/Reporte Diario.png";
import reporteWebp from "../../images/Portfolio/SRE/Reporte Diario.webp";
import datos from "../../images/Portfolio/SRE/SRE Datos.png";
import datosWebp from "../../images/Portfolio/SRE/SRE Datos.webp";
import genGraph from "../../images/Portfolio/SRE/SRE Gen Graph.png";
import genGraphWebp from "../../images/Portfolio/SRE/SRE Gen Graph.webp";
import genReporte from "../../images/Portfolio/SRE/SRE Gen Reporte.png";
import genReporteWebp from "../../images/Portfolio/SRE/SRE Gen Reporte.webp";
import graphGen from "../../images/Portfolio/SRE/SRE Graph Generada.png";
import graphGenWebp from "../../images/Portfolio/SRE/SRE Graph Generada.webp";
import programacion from "../../images/Portfolio/SRE/SRE Programacion.png";
import programacionWebp from "../../images/Portfolio/SRE/SRE Programacion.webp";
import registro from "../../images/Portfolio/SRE/SRE Registro.png";
import registroWebp from "../../images/Portfolio/SRE/SRE Registro.webp";
import reportePDF from "../../images/Portfolio/SRE/SRE Reporte PDF.png";
import reportePDFWebp from "../../images/Portfolio/SRE/SRE Reporte PDF.webp";

import ImageZoom from "../../components/Zoom";

import "./styles/sreExcel.css";

export default class sreExcel extends Component {
  render() {
    return (
      <div className="sreExcel">
        <div className="container">
          <div className="row">
            <div className="sreExcel__col col-11.75 col-md-8">
              <h1>Registro de trámites en Excel</h1>
              <p>
                Se creó un bookmarklet que arranca un script que va recogiendo
                la información necesaria, y al final de la jornada se puede
                acceder a la siguiente pagína para filtrar solamente la
                información necesaria.
              </p>
              <ImageZoom
                className="sreExcel__image"
                src={reporte}
                srcWebp={reporteWebp}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={data}
                srcWebp={dataWebp}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={registro}
                srcWebp={registroWebp}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={datos}
                srcWebp={datosWebp}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={genGraph}
                srcWebp={genGraphWebp}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={graphGen}
                srcWebp={graphGenWebp}
                magnify={1.75}
                alt="Reporte Diario"
              />

              <ImageZoom
                className="sreExcel__image"
                src={genReporte}
                srcWebp={genReporteWebp}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={reportePDF}
                srcWebp={reportePDFWebp}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={programacion}
                srcWebp={programacionWebp}
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
