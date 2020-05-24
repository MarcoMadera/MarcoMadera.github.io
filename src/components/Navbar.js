import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar" id="myNavbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <span>
            <span className="font-weight-ligh">Inicio</span>
          </span>
        </Link>
        <Link className="Navbar__brand" to="/blog">
          <span>
            <span className="font-weight-ligh">Blog</span>
          </span>
        </Link>
        <Link className="Navbar__brand" to="/portfolio">
          <span>
            <span className="font-weight-ligh">Portafolio</span>
          </span>
        </Link>
        <Link className="Navbar__brand" to="/about">
          <span>
            <span className="font-weight-ligh">Sobre mí</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
