import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-6">
              <h1>Sistema de control Personal</h1>
              <Link className="btn btn-primary" to="/randomPage">
                Random Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
