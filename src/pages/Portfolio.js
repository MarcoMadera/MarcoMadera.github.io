import React, { Component } from "react";
import PortfolioEntries from "../components/PortfolioEntries";
import chiSqrtCover from "../images/Portfolio/ChiSqrt/ChiSqrtCover.png";
import chiSqrtCoverWebp from "../images/Portfolio/ChiSqrt/ChiSqrtCover.webp";
import SRECover from "../images/Portfolio/SRE/Data.png";
import SRECoverWebp from "../images/Portfolio/SRE/Data.webp";
import data from "../images/Portfolio/SRE/Data.png";
import dataWebp from "../images/Portfolio/SRE/Data.webp";
import reporte from "../images/Portfolio/SRE/Reporte Diario.png";
import reporteWebp from "../images/Portfolio/SRE/Reporte Diario.webp";
import datos from "../images/Portfolio/SRE/SRE Datos.png";
import datosWebp from "../images/Portfolio/SRE/SRE Datos.webp";
import genGraph from "../images/Portfolio/SRE/SRE Gen Graph.png";
import genGraphWebp from "../images/Portfolio/SRE/SRE Gen Graph.webp";
import genReporte from "../images/Portfolio/SRE/SRE Gen Reporte.png";
import genReporteWebp from "../images/Portfolio/SRE/SRE Gen Reporte.webp";
import graphGen from "../images/Portfolio/SRE/SRE Graph Generada.png";
import graphGenWebp from "../images/Portfolio/SRE/SRE Graph Generada.webp";
import programacion from "../images/Portfolio/SRE/SRE Programacion.png";
import programacionWebp from "../images/Portfolio/SRE/SRE Programacion.webp";
import registro from "../images/Portfolio/SRE/SRE Registro.png";
import registroWebp from "../images/Portfolio/SRE/SRE Registro.webp";
import reportePDF from "../images/Portfolio/SRE/SRE Reporte PDF.png";
import reportePDFWebp from "../images/Portfolio/SRE/SRE Reporte PDF.webp";

import "./styles/Portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <div className="container">
          <div className="row">
            <div className="Portfolio__col col-12 col-md-8">
              <ul>
                <li>
                  <PortfolioEntries
                    link="chiSqrt"
                    cover={[chiSqrtCover]}
                    coverWebp={[chiSqrtCoverWebp]}
                    title="Pruebas para números aleatorios."
                    description="Pruebas de uniformidad e independencia para números aleatorios entre 0 a 1"
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <PortfolioEntries
                    link="sreExcel"
                    cover={[
                      SRECover,
                      data,
                      reporte,
                      datos,
                      genGraph,
                      genReporte,
                      graphGen,
                      programacion,
                      registro,
                      reportePDF,
                    ]}
                    coverWebp={[
                      SRECoverWebp,
                      dataWebp,
                      reporteWebp,
                      datosWebp,
                      genGraphWebp,
                      genReporteWebp,
                      graphGenWebp,
                      programacionWebp,
                      registroWebp,
                      reportePDFWebp,
                    ]}
                    title="Registro de trámites de pasaportes mexicanos"
                    description="Sistema de control de pasaportes mexicanos en la ome Caborca"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
