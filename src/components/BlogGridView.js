import React from "react";
import "./styles/BlogGridView.css";
import { Link } from "react-router-dom";

const BlogGridView = (props) => {
  return (
    <article className="BlogGridView">
      <Link
        className="text-reset text-decoration-none"
        to={`/blog${props.link && props.link}`}
      >
        <header className="BlogGridView__header">
          <picture>
            <source
              srcSet={props.coverWebp}
              type="image/webp"
              alt={props.title}
            />
            <img
              src={props.cover}
              alt={props.title}
              className="BlogGridView__header__cover"
            />
          </picture>
          <div className="BlogGridView__header__content">
            <h4 className="BlogGridView__header__content__title">
              {props.title}
            </h4>
            <p className="BlogGridView__header__content__excerpt">
              {props.excerpt}
              ...{" "}
              <span className="BlogGridView__footer__readMore">Leer más</span>
            </p>
          </div>
        </header>
      </Link>
      <footer className="BlogGridView__footer">
        {(() => {
          let tags = [];
          for (let i = 0; i < props.tags.length; i++) {
            tags.push(
              <span key={i}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/blog/tag/${props.tags[i]}`}
                >
                  <span className="BlogGridView__footer__tags">
                    #{props.tags[i]}
                  </span>{" "}
                </Link>
              </span>
            );
          }
          return tags;
        })()}
        <p className="BlogGridView__footer__meta">
          Marco Madera | {props.date}
        </p>
        <Link
          className="text-reset text-decoration-none"
          to={`/blog${props.link ? props.link : ""}`}
        ></Link>
      </footer>
    </article>
  );
};

export default BlogGridView;
