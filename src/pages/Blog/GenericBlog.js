import React from "react";
import { entries } from "./BlogEntries";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import { DiscussionEmbed } from "disqus-react";

const GenericBlog = (props) => {
  const id = entries[props.match.params.blogId - 1];
  const title = id.title.replace(/\s/g, "-");
  console.log(title);
  console.log(props.match.params);
  return (
    <div className="About">
      <div className="container">
        <div className="row">
          <div className="About__col col-12 col-md-8">
            <ReactMarkdown source={id.src} renderers={{ code: CodeBlock }} />
            <DiscussionEmbed
              shortname="marcomadera"
              config={
                ({ url: `http://localhost:9000/blog/${id}` },
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
