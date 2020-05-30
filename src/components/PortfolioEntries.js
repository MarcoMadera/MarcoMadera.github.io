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
        <img src={props.cover} alt="" className="PortfolioListItem__preview" />
      </Link>
      <div>
        <h4 className="PortfolioEntry__title">{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default PortfolioEntries;
