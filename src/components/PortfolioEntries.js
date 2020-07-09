import React from "react";
import "./styles/PortfolioEntries.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const PortfolioEntries = (props) => {
  return (
    <div className="PortfolioEntries">
      <Link
        className="text-reset text-decoration-none"
        to={`portfolio/${props.link}`}
      >
        <Carousel interval={2000} controls={false}>
          {props.cover.map((cover, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100 PortfolioEntries__preview"
                src={cover}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="PortfolioEntries__content">
          <h4 className="PortfolioEntries__content__title">{props.title}</h4>
          <p className="PortfolioEntries__content__excerpt">
            {props.description}... <span>ver más</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioEntries;
