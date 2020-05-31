import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import profileImg from "./../images/me.jpg";

export default class Home extends Component {
  randomPage() {
    let pages = [
      "/about",
      "/portfolio",
      "/portfolio/sreExcel",
      "/portfolio/chiSqrt",
      "/blog",
      "/blog/Pseudo-Random-numbers",
    ];

    return pages[Math.round(Math.random() * (pages.length - 1))];
  }

  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="">
            <div className="Home__col">
              <div className="hero_img">
                <img src={profileImg} id="me" alt="me" />
                <h1>Marco Madera</h1>
                <div className="faBrands">
                  <a href="https://github.com/MarcoMadera" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/marcomadera/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/madera_marco" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <br />
                <Link className="btn btn-primary" to={this.randomPage()}>
                  Página aleatoria
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
