/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import { DiscussionEmbed } from "disqus-react";
import "./styles/GenericBlog.css";
import NotFound from "../../pages/NotFound";
import MetaData from "../../components/MetaData";
import PropTypes from "prop-types";
import slugify from "slugify";
import HtmlToReact from "html-to-react";

const GenericBlog = ({ match, posts }) => {
  const blog = posts.find(
    (post) => slugify(post.title) === match.params.blogId
  );
  const {
    creator,
    title,
    link,
    enclosure,
    pubDate,
    content,
    contentSnippet,
  } = blog;
  const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
  const processingInstructions = [
    {
      shouldProcessNode: ({ type, name }) =>
        type === "tag" && name === "youtube",
      processNode: function YoutubeVideoNode({ attribs }) {
        return (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube-nocookie.com/embed/${attribs.id}`}
            title={attribs.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ maxWidth: 100 + "%" }}
          ></iframe>
        );
      },
    },
    {
      shouldProcessNode: ({ type, name }) =>
        type === "tag" && name === "videogif",
      processNode: function VideoGifNode({ attribs }, children) {
        return (
          <>
            <div>
              <video title={attribs.title} muted loop autoPlay playsInline>
                <source
                  src={attribs.src || attribs.dark || attribs.light}
                  type="video/mp4"
                />
              </video>
              {children}
            </div>
          </>
        );
      },
    },
    {
      shouldProcessNode: ({ type, name }) => type === "tag" && name === "pre",
      processNode: function Prev({ attribs }, children) {
        return (
          <div style={{ position: "relative" }}>
            <pre {...attribs}>{children}</pre>
          </div>
        );
      },
    },
    {
      shouldProcessNode: ({ type, name }) => type === "tag" && name === "image",
      processNode: function Image({ attribs }, children) {
        return (
          <>
            <img
              title={attribs.title}
              src={attribs.src || attribs.dark || attribs.light || attribs.dark}
              alt={attribs.alt}
            />
            {children}
          </>
        );
      },
    },
    {
      shouldProcessNode: ({ type, name }) => type === "tag" && name === "tweet",
      processNode: function Image({ attribs }, children) {
        return (
          <>
            <iframe
              width="560"
              height="400"
              src={`https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-0&frame=false&hideCard=false&hideThread=false&id=${attribs.id}&lang=es`}
              title={attribs.title}
              frameBorder="0"
              style={{ maxWidth: 100 + "%" }}
            ></iframe>
            {children}
          </>
        );
      },
    },
    {
      shouldProcessNode: function () {
        return true;
      },
      processNode: processNodeDefinitions.processDefaultNode,
    },
  ];
  const HTMLToReactParser = HtmlToReact.Parser;
  const htmlParser = new HTMLToReactParser();
  const isValidNode = function () {
    return true;
  };
  const PostContent = htmlParser.parseWithInstructions(
    `<div>${content}<div>`,
    isValidNode,
    processingInstructions
  );

  return (
    <Fragment>
      {posts.length > 0 && !blog ? (
        <NotFound />
      ) : (
        <main className="GenericBlog container" id="main">
          <MetaData
            title={title}
            description={contentSnippet.slice(0, 180)}
            image={enclosure.url}
          />
          <h1>{title}</h1>
          <p className="BlogListView__footer__meta">
            {creator} |{" "}
            {new Date(pubDate).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          {PostContent}
          <hr></hr>
          <a href={link} rel="noopener noreferrer" target="_blank">
            Contenido Fuente Original
          </a>
          <DiscussionEmbed
            shortname="marcomadera"
            config={{
              url: `https://marcomadera.github.io/blog/${slugify(title)}`,
              identifier: slugify(title),
              title: title,
              language: "es-MX",
            }}
          />
        </main>
      )}
    </Fragment>
  );
};

GenericBlog.propTypes = {
  match: PropTypes.object,
  posts: PropTypes.array,
};

export default GenericBlog;
