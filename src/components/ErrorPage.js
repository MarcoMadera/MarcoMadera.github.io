import React from "react";
import "./styles/ErrorPage.css";

const ErrorPage = () => {
  return (
    <main className="ErrorPage container" id="main">
      <h3>Ha ocurrido un error</h3>
      <a href={window.location.href}>Intenta de nuevo refrescando la página</a>
    </main>
  );
};

export default ErrorPage;
