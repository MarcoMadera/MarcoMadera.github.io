import React, { Component } from "react";
import BlogEntries from "../components/BlogEntries";

import "./styles/Blog.css";

export default class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <div className="container">
          <div className="row">
            <div className="Blog__col col-12 col-md-8">
              <h1>Blog</h1>
              <div className="BlogList">
                <ul>
                  <li>
                    <BlogEntries />
                  </li>
                  <li>
                    <BlogEntries />
                  </li>
                  <li>
                    <BlogEntries />
                  </li>
                  <li>
                    <BlogEntries />
                  </li>
                  <li>
                    <BlogEntries />
                  </li>
                  <li>
                    <BlogEntries />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
