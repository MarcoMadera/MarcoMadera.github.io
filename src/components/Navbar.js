import React from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar" id="myNavbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <span>
            <span className="font-weight-ligh">Marco Madera</span>
          </span>
        </Link>
        <Link className="Navbar__brand" to="/about">
          <span>
            <span className="font-weight-ligh">Acerca de</span>
          </span>
        </Link>
        <Link className="Navbar__brand" to="/blog">
          <span>
            <span className="font-weight-ligh">Blog</span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar