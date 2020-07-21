import React from "react";
import "./styles/PortfolioEntries.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const PortfolioEntries = ({ link, cover, description, title }) => {
  return (
    <article className="PortfolioEntries">
      <Link
        className="text-reset text-decoration-none"
        to={`portfolio/${link}`}
      >
        <Carousel interval={2000} controls={false}>
          {cover.map((cover, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100 PortfolioEntries__preview"
                src={cover}
                alt=""
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <section className="PortfolioEntries__content">
          <h4 className="PortfolioEntries__content__title">{title}</h4>
          <p className="PortfolioEntries__content__excerpt">
            {description}... <span>ver más</span>
          </p>
        </section>
      </Link>
    </article>
  );
};

export default PortfolioEntries;
