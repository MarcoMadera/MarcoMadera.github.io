import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import profileImgWebp from "./../images/profile.webp";
import profileImg from "./../images/profile.jpg";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../components/Icons";

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
                <picture>
                  <source srcSet={profileImgWebp} type="image/webp" alt="me" />
                  <img
                    className="profileImg"
                    src={profileImg}
                    id="me"
                    alt="me"
                  />
                </picture>
                <h1>Marco Madera</h1>
                <div className="icons">
                  <a
                    aria-label="Github"
                    href="https://github.com/MarcoMadera"
                    target="_blank"
                    rel="noopener"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/in/marcomadera/"
                    target="_blank"
                    rel="noopener"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    aria-label="Twitter"
                    href="https://twitter.com/madera_marco"
                    target="_blank"
                    rel="noopener"
                  >
                    <TwitterIcon />
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
