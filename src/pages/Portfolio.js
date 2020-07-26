import React from "react";
import PortfolioEntries from "../components/PortfolioEntries";
import MetaData from "../components/MetaData";

import "./styles/Portfolio.css";

const Portfolio = () => {
  return (
    <main className="Portfolio container" id="main">
      <MetaData
        title="Marco Madera | Portafolio"
        description="Aquí puedes encontrar mi proyectos"
      />
      <ul>
        <li>
          <PortfolioEntries
            link="challenges"
            cover={[
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595276230/Potfolio/challenges/63db5980-b4c8-11ea-8aa5-1583b2d3e79a_xxhse4.jpg",
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595276265/Potfolio/challenges/ba06b000-be6b-11ea-8d49-fb31622b8b52_xiksfy.jpg",
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595276298/Potfolio/challenges/6e876a00-b972-11ea-9783-c54128c626c3_ho5tq4.jpg",
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595276324/Potfolio/challenges/ebec7980-b6e9-11ea-8760-3077406d08e6_mrjaid.jpg",
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595276348/Potfolio/challenges/4b2b4200-b316-11ea-97ab-b223698314a4_vvyaif.png",
            ]}
            title="Desafios frontend"
            description="La mejor forma de mejorar en la creación de sitios web es seguir construyendo."
          />
        </li>
        <li>
          <PortfolioEntries
            link="chiSqrt"
            cover={[
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595276090/Potfolio/chiSqrt/chiSqrtCover_mngxy7.png",
            ]}
            title="Pruebas para números aleatorios."
            description="Pruebas de uniformidad e independencia para números aleatorios entre 0 a 1"
          />
        </li>
        <li>
          <PortfolioEntries
            link="sreExcel"
            cover={[
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595275323/Potfolio/sreExcel/Data_splifz.png",
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595275322/Potfolio/sreExcel/Reporte_Diario_db5g11.png",
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595275321/Potfolio/sreExcel/SRE_Datos_rznxtt.png",
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595275324/Potfolio/sreExcel/SRE_Gen_Graph_iz4vgw.png",
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595275324/Potfolio/sreExcel/SRE_Gen_Reporte_yvv11c.png",
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595275323/Potfolio/sreExcel/SRE_Graph_Generada_gg2do4.png",
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595275322/Potfolio/sreExcel/SRE_Programacion_aosbtb.png",
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595275323/Potfolio/sreExcel/SRE_Registro_fbjsqg.png",
              "https://res.cloudinary.com/marcomadera/image/upload/c_scale,w_760/v1595275324/Potfolio/sreExcel/SRE_Reporte_PDF_yvvswb.png",
            ]}
            title="Registro de trámites de pasaportes mexicanos"
            description="Sistema de control de pasaportes mexicanos en la ome Caborca"
          />
        </li>
      </ul>
    </main>
  );
};
export default Portfolio;
