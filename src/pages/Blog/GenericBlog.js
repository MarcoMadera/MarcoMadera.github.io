import React, { Fragment } from "react";
import { entries } from "./BlogEntries";
import ReactMarkdown from "react-markdown/with-html";
import CodeBlock from "./CodeBlock";
import { DiscussionEmbed } from "disqus-react";
import "./styles/GenericBlog.css";
import NotFound from "../../pages/NotFound";

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
              { title: blog.title },
              {
                cookie:
                  'document.cookie = "my_cookie_name=my_cookie_value; expires=Thu, 11 Jun 2070 11:11:11 UTC; path=/; SameSite=None; Secure";',
              })
            }
          />
        </main>
      )}
    </Fragment>
  );
};

export default GenericBlog;
