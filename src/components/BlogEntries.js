import React from "react";
import "./styles/BlogEntries.css";
import logo from "../images/image.jpg";
import { Link } from "react-router-dom";

class BlogEntries extends React.Component {
  state = {};
  render() {
    return (
      <Link
        className="text-reset text-decoration-none"
        to={`/blog/Pseudo-Random-numbers`}
      >
        <div className="BlogListItem">
          <img src={logo} alt="" className="BlogListItem__preview" />
          <p>
            Números Pseudo Aleatorios
            <br />
            @Marco 20/Mayo/2020 <br />
            #Estadística #Math #Random
          </p>
        </div>
      </Link>
    );
  }
}

export default BlogEntries;
