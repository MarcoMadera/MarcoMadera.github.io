import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import profileImgWebp from "./../images/profile.webp";
import profileImg from "./../images/profile.jpg";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedInIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import { routes } from "../routes";

const Home = () => {
  const randomPage = () => {
    const pages = routes.map(({ path }) => path);
    return pages[Math.round(Math.random() * (pages.length - 1))];
  };
  return (
    <main className="Home" id="main">
      <picture>
        <source srcSet={profileImgWebp} type="image/webp" />
        <img
          className="Home__profileImg"
          src={profileImg}
          alt="Marco Madera"
          height="120"
          width="120"
        />
      </picture>
      <h1 className="Home__name">Marco Madera</h1>
      <div className="Home__icons">
        <a
          aria-label="Github"
          href="https://github.com/MarcoMadera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/marcomadera/"
          target="_blank"
          rel="noopener  noreferrer"
        >
          <LinkedinIcon />
        </a>
        <a
          aria-label="Twitter"
          href="https://twitter.com/madera_marco"
          target="_blank"
          rel="noopener  noreferrer"
        >
          <TwitterIcon />
        </a>
      </div>
      <Link className="btn btn-primary Home__button" to={randomPage()}>
        Página aleatoria
      </Link>
    </main>
  );
};
export default Home;
