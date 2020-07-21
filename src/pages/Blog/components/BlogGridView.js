import React from "react";
import "./styles/BlogGridView.css";
import { Link } from "react-router-dom";

const BlogGridView = ({
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
    <li className="BlogGridView">
      <article>
        <Link
          className="text-reset text-decoration-none"
          to={`/blog/${id}/#${title.replace(/\s/g, "-")}`}
        >
          <header className="BlogGridView__header">
            <img
              src={cover.w760}
              alt={coverDescription}
              className="BlogGridView__header__cover"
            />
            <section className="BlogGridView__header__content">
              <h4 className="BlogGridView__header__content__title">{title}</h4>
              <p className="BlogGridView__header__content__excerpt">
                {excerpt}
                ...{" "}
                <span className="BlogGridView__footer__readMore">Leer más</span>
              </p>
            </section>
          </header>
        </Link>
        <footer className="BlogGridView__footer">
          {(() =>
            tags.map((tags, i) => (
              <span key={i}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/blog/tag/${tags}`}
                >
                  <span className="BlogGridView__footer__tags">#{tags}</span>{" "}
                </Link>
              </span>
            )))()}
          <p className="BlogGridView__footer__meta">
            {author} |{" "}
            {date.toLocaleString("en-US", {
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

export default BlogGridView;
