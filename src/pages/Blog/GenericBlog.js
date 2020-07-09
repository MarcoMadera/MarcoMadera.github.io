import React from "react";
import { entries } from "./BlogEntries";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import { DiscussionEmbed } from "disqus-react";
import "./styles/GenericBlog.css";

const GenericBlog = (props) => {
  const id = entries[props.match.params.blogId - 1];
  return (
    <div className="GenericBlog">
      <div className="container">
        <div className="row">
          <div className="GenericBlog__col col-12 col-md-8">
            <ReactMarkdown source={id.src} renderers={{ code: CodeBlock }} />
            <hr></hr>
            <DiscussionEmbed
              shortname="marcomadera"
              config={
                ({ url: `https://marcomadera.github.io/blog/${id}` },
                { identifier: id },
                { title: id.title })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericBlog;
