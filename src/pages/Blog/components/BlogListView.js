import React from "react";
import "./styles/BlogListView.css";
import { Link } from "react-router-dom";

const BlogListView = (props) => {
  const title = props.title.replace(/\s/g, "-");
  return (
    <li className="BlogListView">
      <article>
        <Link
          className="text-reset text-decoration-none"
          to={`/blog/${props.id}/#${title}`}
        >
          <header className="BlogListView__header">
            <div className="BlogListView__header__content">
              <h4 className="BlogListView__header__content__title">
                {props.title}
              </h4>
              <p className="BlogListView__header__content__excerpt">
                {props.excerpt}
                ...{" "}
                <span className="BlogListView__header__content__excerpt__readMore">
                  Leer más
                </span>
              </p>
            </div>
            <picture>
              <source srcSet={props.coverWebp} type="image/webp" />
              <img
                src={props.cover}
                alt={props.coverDescription}
                className="BlogListView__header__preview"
              />
            </picture>
          </header>
        </Link>
        <footer className="BlogListView__footer">
          {(() =>
            props.tags.map((tags, i) => (
              <span key={i}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/blog/tag/${tags}`}
                >
                  <span className="BlogListView__footer__tags">#{tags}</span>{" "}
                </Link>
              </span>
            )))()}
          <p className="BlogListView__footer__meta">
            {props.author} | {props.date}
          </p>
        </footer>
      </article>
    </li>
  );
};

export default BlogListView;
