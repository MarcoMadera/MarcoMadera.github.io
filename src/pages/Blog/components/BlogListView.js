import React from "react";
import "./styles/BlogListView.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogListView = ({
  title,
  id,
  excerpt,
  cover,
  coverDescription,
  tags,
  author,
  date,
}) => {
  return (
    <li className="BlogListView">
      <Link to={`/blog/${id}/#${title.replace(/\s/g, "-")}`}>
        <header className="BlogListView__header">
          <section className="BlogListView__header__content">
            <h4 className="BlogListView__header__content__title">{title}</h4>
            <p className="BlogListView__header__content__excerpt">
              {excerpt}
              ...{" "}
              <span className="BlogListView__header__content__excerpt__readMore">
                Leer más
              </span>
            </p>
          </section>
          <img
            src={cover.w120}
            alt={coverDescription}
            className="BlogListView__header__preview"
            width="120"
            height="120"
          />
        </header>
      </Link>
      <footer className="BlogListView__footer">
        {(() =>
          tags.map((tags, i) => (
            <span key={i}>
              <Link to={`/blog/tag/${tags}`}>
                <span className="BlogListView__footer__tags">#{tags}</span>{" "}
              </Link>
            </span>
          )))()}
        <p className="BlogListView__footer__meta">
          {author} |{" "}
          {date.toLocaleString("en-US", {
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
  id: PropTypes.number,
  excerpt: PropTypes.string,
  cover: PropTypes.object,
  coverDescription: PropTypes.string,
  tags: PropTypes.array,
  author: PropTypes.string,
  date: PropTypes.instanceOf(Date)
};

export default BlogListView;
