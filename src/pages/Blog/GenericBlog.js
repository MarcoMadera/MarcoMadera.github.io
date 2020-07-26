import React, { Fragment } from "react";
import { entries } from "./BlogEntries";
import ReactMarkdown from "react-markdown/with-html";
import CodeBlock from "./CodeBlock";
import { DiscussionEmbed } from "disqus-react";
import "./styles/GenericBlog.css";
import NotFound from "../../pages/NotFound";
import MetaData from "../../components/MetaData";

const GenericBlog = ({ match }) => {
  const blog = entries.find(
    (blog) => blog.id === parseInt(match.params.blogId)
  );

  return (
    <Fragment>
      {!blog ? (
        <NotFound />
      ) : (
        <main className="GenericBlog container" id="main">
          <MetaData
            title={blog.title}
            description={blog.excerpt}
            image={blog.cover.w760}
          />
          <ReactMarkdown
            source={blog.src}
            renderers={{ code: CodeBlock }}
            escapeHtml={false}
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
        </main>
      )}
    </Fragment>
  );
};

export default GenericBlog;
