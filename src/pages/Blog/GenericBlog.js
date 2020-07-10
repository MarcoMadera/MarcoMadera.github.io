import React, { Fragment } from "react";
import { entries } from "./BlogEntries";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import { DiscussionEmbed } from "disqus-react";
import "./styles/GenericBlog.css";
import NotFound from "../../pages/NotFound";

const GenericBlog = (props) => {
  const blog = entries.find((blog) => blog.id == props.match.params.blogId);

  return (
    <Fragment>
      {!blog ? (
        <NotFound />
      ) : (
        <div className="GenericBlog">
          <div className="container">
            <div className="row">
              <div className="GenericBlog__col col-12 col-md-8">
                <ReactMarkdown
                  source={blog.src}
                  renderers={{ code: CodeBlock }}
                />
                <hr></hr>
                <DiscussionEmbed
                  shortname="marcomadera"
                  config={
                    ({ url: `https://marcomadera.github.io/blog/${blog.id}` },
                    { identifier: blog.id },
                    { title: blog.title })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default GenericBlog;
