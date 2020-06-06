import React, { Component } from "react";
import GenericBlog from "./GenericBlog.md";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
export default class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="container">
          <div className="row">
            <div className="About__col col-12 col-md-8">
              <ReactMarkdown
                source={GenericBlog}
                renderers={{ code: CodeBlock }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
