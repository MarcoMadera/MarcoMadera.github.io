import React from "react";
import "./styles/BlogGridView.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import slugify from "slugify";
const BlogGridView = ({
  link,
  creator,
  enclosure,
  contentSnippet,
  pubDate,
  title,
}) => {
  return (
    <li className="BlogGridView">
      <article>
        <Link
          className="text-reset text-decoration-none"
          to={`/blog/${slugify(title)}`}
        >
          <header className="BlogGridView__header">
            <img
              src={enclosure.url}
              alt={title}
              className="BlogGridView__header__cover"
            />
            <section className="BlogGridView__header__content">
              <h4 className="BlogGridView__header__content__title">{title}</h4>
              <p className="BlogGridView__header__content__excerpt">
                {contentSnippet.slice(0, 180)}
                ...{" "}
                <span className="BlogGridView__footer__readMore">Leer más</span>
              </p>
            </section>
          </header>
        </Link>
        <footer className="BlogGridView__footer">
          <a href={link} rel="noopener noreferrer" target="_blank">
            Original
          </a>
          <p className="BlogGridView__footer__meta">
            {creator} |{" "}
            {new Date(pubDate).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </footer>
      </article>
    </li>
  );
};

BlogGridView.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  creator: PropTypes.string,
  enclosure: PropTypes.object,
  contentSnippet: PropTypes.string,
  pubDate: PropTypes.string,
};

export default BlogGridView;
