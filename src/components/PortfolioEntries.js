import React from "react";
import "./styles/PortfolioEntries.css";
import logo from "../images/image.jpg";
import { Link } from "react-router-dom";

class PortfolioEntries extends React.Component {
  state = {};
  render() {
    return (
      <div className="PortfolioListItem">
        <Link
          className="text-reset text-decoration-none"
          to={`/portfolio/Pseudo-Random-numbers`}
        >
          <img src={logo} alt="" className="PortfolioListItem__preview" />
        </Link>
        <div>
          <h4 className="PortfolioEntry__title">Números Pseudo Aleatorios</h4>
          <p>
            @Marco 20/Mayo/2020 <br />
            #Estadística #Math #Random
          </p>
        </div>
      </div>
    );
  }
}

export default PortfolioEntries;
