import React, { Component } from "react";
import PortfolioEntries from "../components/PortfolioEntries";

import "./styles/Portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <div className="container">
          <div className="row">
            <div className="Portfolio__col col-12 col-md-8">
              <ul>
                <li>
                  <PortfolioEntries />
                </li>
              </ul>
              <ul>
                <li>
                  <PortfolioEntries />
                </li>
              </ul>
              <ul>
                <li>
                  <PortfolioEntries />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
