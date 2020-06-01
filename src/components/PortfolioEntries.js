import React from "react";
import "./styles/PortfolioEntries.css";
import { Link } from "react-router-dom";

const PortfolioEntries = (props) => {
  return (
    <div className="PortfolioListItem">
      <Link
        className="text-reset text-decoration-none"
        to={`portfolio/${props.link}`}
      >
        <picture>
          <source srcSet={props.coverWebp} type="image/webp" alt="Cover" />
          <img
            src={props.cover}
            alt="Cover"
            className="PortfolioListItem__preview"
          />
        </picture>
      </Link>
      <div>
        <h4 className="PortfolioEntry__title">{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default PortfolioEntries;
