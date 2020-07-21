import React from "react";
import Challenge from "./Challenge";

import "./styles/challenges.css";

const challenges = () => {
  return (
    <main className="challenges container">
      <h1>Desafios frontend</h1>
      <p>
        La mejor forma de mejorar en la creación de sitios web es seguir
        construyendo. Aqui se listan desafios que he completado ordenados desde
        el primero que completé hasta el último.
      </p>

      <Challenge
        title="Social Media Dashboard"
        liveDemo="https://social-media-dashboard.marcomadera.vercel.app/"
        challengePage="https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H"
        repo="https://github.com/MarcoMadera/social-media-dashboard"
        challengeImg="https://res.cloudinary.com/marcomadera/image/upload/v1595276348/Potfolio/challenges/4b2b4200-b316-11ea-97ab-b223698314a4_vvyaif.png"
        todoList={[
          "Ver el diseño óptimo para el sitio dependiendo del tamaño de la pantalla 1440px y 375px",
          "Ver los estados para todos los elementos interactivos",
          "Cambiar el tema de color a preferencia",
        ]}
      />
      <Challenge
        title="Clipboard Landing Page"
        liveDemo="https://clipboard-landing-page.marcomadera.vercel.app/"
        challengePage="https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9"
        repo="https://github.com/MarcoMadera/clipboard-landing-page"
        challengeImg="https://res.cloudinary.com/marcomadera/image/upload/v1595276230/Potfolio/challenges/63db5980-b4c8-11ea-8aa5-1583b2d3e79a_xxhse4.jpg"
        todoList={[
          "Ver el diseño óptimo para el sitio dependiendo del tamaño de la pantalla 1440px y 375px",
          "Ver los estados para todos los elementos interactivos",
        ]}
      />
      <Challenge
        title="Job listings with filtering"
        liveDemo="https://job-listings-with-filtering.marcomadera.vercel.app/"
        challengePage="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt"
        repo="https://github.com/MarcoMadera/Job-listings-with-filtering"
        challengeImg="https://res.cloudinary.com/marcomadera/image/upload/v1595276324/Potfolio/challenges/ebec7980-b6e9-11ea-8760-3077406d08e6_mrjaid.jpg"
        todoList={[
          "Ver el diseño óptimo para el sitio dependiendo del tamaño de la pantalla 1440px y 375px",
          "Ver los estados para todos los elementos interactivos",
          "Filtrar la lista de ofertas basado en las categorías seleccionadas",
        ]}
      />
      <Challenge
        title="Easybank landing page"
        liveDemo="https://easy-bank-landing-page.marcomadera.vercel.app/"
        challengePage="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN"
        repo="https://github.com/MarcoMadera/easy-bank-landing-page"
        challengeImg="https://res.cloudinary.com/marcomadera/image/upload/v1595276298/Potfolio/challenges/6e876a00-b972-11ea-9783-c54128c626c3_ho5tq4.jpg"
        todoList={[
          "Ver el diseño óptimo para el sitio dependiendo del tamaño de la pantalla 1440px y 375px",
          "Ver los estados para todos los elementos interactivos",
        ]}
      />
      <Challenge
        title="Manage landing page"
        liveDemo="https://manage-landing-page.marcomadera.vercel.app/"
        challengePage="https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5"
        repo="https://github.com/MarcoMadera/manage-landing-page"
        challengeImg="https://res.cloudinary.com/marcomadera/image/upload/v1595276265/Potfolio/challenges/ba06b000-be6b-11ea-8d49-fb31622b8b52_xiksfy.jpg"
        todoList={[
          "Ver el diseño óptimo para el sitio dependiendo del tamaño de la pantalla 1440px y 375px",
          "Ver los estados para todos los elementos interactivos",
          "Ver todos los testimonios en un slider horizontal",
          "Recibir un mensaje de error se envíe el formulario del newsletter si:",
          [
            "La entrada esta vacía",
            "La dirección de email no esta formateada correctamente",
          ],
        ]}
      />
      <Challenge
        title="Manage landing page"
        liveDemo="https://chat-app-css-illustration.marcomadera.vercel.app/"
        challengePage="https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY"
        repo="https://github.com/MarcoMadera/chat-app-css-illustration"
        challengeImg="https://res.cloudinary.com/marcomadera/image/upload/v1595280865/Potfolio/challenges/e3refv80-b4vfd8-11ea-8aa5-1dcvf2d3e79a_q5s13z.jpg"
        todoList={[
          "Ver el diseño óptimo para el sitio dependiendo del tamaño de la pantalla 1440px y 375px",
          "Ver los estados para todos los elementos interactivos",
          "Ver la interfaz del chat animada en la entrada inicial (opcional)",
        ]}
      />
    </main>
  );
};

export default challenges;
