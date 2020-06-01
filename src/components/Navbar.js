import React, { useRef } from "react";
import "./styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
  const ref = useRef(null);
  function handleClick() {
    ref.current.classList.toggle("show");
  }

  let location = useLocation();
  function HeaderView() {
    let header = "";
    switch (location.pathname.split("/")[1]) {
      case "blog":
        header = "Blog";
        break;
      case "portfolio":
        header = "Portafolio";
        break;
      case "about":
        header = "Sobre mí";
        break;
      default:
        header = "Inicio";
        break;
    }
    return <h3>{header}</h3>;
  }

  return (
    <div className="Navbar" id="myNavbar">
      <div className="container-fluid">
        <div id="sidebar" ref={ref} onClick={handleClick}>
          <div className="toggleBtn">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul>
            <li>
              <Link className="Navbar__brand" to="/">
                <span className="font-weight-ligh">Inicio</span>
              </Link>
            </li>
            <li>
              <Link className="Navbar__brand" to="/blog">
                <span className="font-weight-ligh">Blog</span>
              </Link>
            </li>
            <li>
              <Link className="Navbar__brand" to="/portfolio">
                <span className="font-weight-ligh">Portafolio</span>
              </Link>
            </li>
            <li>
              <Link className="Navbar__brand" to="/about">
                <span className="font-weight-ligh">Sobre mí</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="Navbar__header">{HeaderView()}</div>
    </div>
  );
}

export default Navbar;
