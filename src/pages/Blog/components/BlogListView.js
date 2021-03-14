import React from "react";
import "./styles/BlogListView.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import slugify from "slugify";
const BlogListView = ({
  link,
  creator,
  enclosure,
  contentSnippet,
  pubDate,
  title,
}) => {
  return (
    <li className="BlogListView">
      <Link to={`/blog/${slugify(title)}`}>
        <header className="BlogListView__header">
          <section className="BlogListView__header__content">
            <h4 className="BlogListView__header__content__title">{title}</h4>
            <p className="BlogListView__header__content__excerpt">
              {contentSnippet.slice(0, 180)}
              ...{" "}
              <span className="BlogListView__header__content__excerpt__readMore">
                Leer más
              </span>
            </p>
          </section>
          <img
            src={enclosure.url}
            alt=""
            className="BlogListView__header__preview"
            width="120"
            height="120"
          />
        </header>
      </Link>
      <footer className="BlogListView__footer">
        <a href={link} rel="noopener noreferrer" target="_blank">
          Original
        </a>
        <p className="BlogListView__footer__meta">
          {creator} |{" "}
          {new Date(pubDate).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </footer>
    </li>
  );
};

BlogListView.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  creator: PropTypes.string,
  enclosure: PropTypes.object,
  contentSnippet: PropTypes.string,
  pubDate: PropTypes.string,
};

export default BlogListView;
