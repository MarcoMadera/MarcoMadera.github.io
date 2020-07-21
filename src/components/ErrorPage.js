import React from "react";
import "./styles/ErrorPage.css";

const ErrorPage = () => {
  console.log(window.location.href);
  return (
    <main className="ErrorPage container">
      <h3>Ha ocurrido un error</h3>
      <a href={window.location.href}>Intenta de nuevo refrescando la página</a>
    </main>
  );
};

export default ErrorPage;
