import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import profileImg from "./../images/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default class Home extends Component {
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
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marcomadera/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                  <a href="https://twitter.com/madera_marco" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                </div>
                <br />
                <Link
                  className="btn btn-primary"
                  to="/Blog/Pseudo-Random-numbers"
                >
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
