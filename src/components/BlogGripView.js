import React from "react";
import { Link } from "react-router-dom";

const BlogListView = (props) => {
  return (
    <React.Fragment>
      <article className="post">
        <header className="post__header">
          <Link
            className="text-reset text-decoration-none"
            to={`/blog${props.link ? props.link : ""}`}
          >
            <picture>
              <source
                srcSet={props.coverWebp}
                type="image/webp"
                alt={props.title}
              />
              <img
                src={props.cover}
                alt={props.title}
                className="Post__cover"
              />
            </picture>
          </Link>
          <div className="content">
            <Link
              className="text-reset text-decoration-none"
              to={`/blog${props.link ? props.link : ""}`}
            >
              <h4 className="post__title">{props.title}</h4>
            </Link>
            <p className="excerpt">{props.excerpt}</p>
          </div>
        </header>
        <footer className="post__meta">
          <span className="post__date">{props.date}</span>
          <Link
            className="text-reset text-decoration-none"
            to={`/blog${props.link ? props.link : ""}`}
          >
            <span className="post__more"> Leer más</span>
          </Link>
        </footer>
      </article>
    </React.Fragment>
  );
};

export default BlogListView;
