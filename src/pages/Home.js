import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import profileImgWebp from "./../images/profile.webp";
import profileImg from "./../images/profile.jpg";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../components/Icons";
import { routes } from "../routes";

const Home = () => {
  const randomPage = () => {
    const pages = routes.map(({ path }) => path);
    return pages[Math.round(Math.random() * (pages.length - 1))];
  };
  return (
    <div className="Home">
      <div className="Home__col">
        <div className="Home__container">
          <picture>
            <source srcSet={profileImgWebp} type="image/webp" />
            <img
              className="Home__container__profileImg"
              src={profileImg}
              alt="profile photo"
              height="120"
              width="120"
            />
          </picture>
          <h1 className="Home__container__name">Marco Madera</h1>
          <div className="Home__container__icons">
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
          <Link
            className="btn btn-primary Home__container__button"
            to={randomPage()}
          >
            Página aleatoria
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
