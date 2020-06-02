import React from "react";
import { Link } from "react-router-dom";

const BlogListView = (props) => {
  return (
    <div className="BlogListItem">
      <Link
        className="text-reset text-decoration-none"
        to={`/blog${props.link ? props.link : ""}`}
      >
        <div>
          <div className="BlogListItem__grid">
            <div>
              <h4 className="BlogEntry__title">{props.title}</h4>
              <p className="BlogEntry__excerpt">
                {props.excerpt}
                <span>
                  ... <span className="BlogList__readMore">Leer más</span>
                </span>
              </p>
            </div>
            <picture>
              <source
                srcSet={props.coverWebp}
                type="image/webp"
                alt={props.title}
              />
              <img
                src={props.cover}
                alt={props.title}
                className="BlogListItem__preview"
              />
            </picture>
          </div>
        </div>
      </Link>
      <footer>
        <div className="BlogEntry__meta">
          {(() => {
            let tags = [];
            for (let i = 0; i < props.tags.length; i++) {
              tags.push(
                <span key={i}>
                  <Link
                    className="text-reset text-decoration-none"
                    to={`/blog/tag/${props.tags[i]}`}
                  >
                    <span className="BlogEntry__tags">#{props.tags[i]}</span>{" "}
                  </Link>
                </span>
              );
            }
            return tags;
          })()}
        </div>
        <p className="BlogList__metaName">Marco Madera | {props.date}</p>
      </footer>
    </div>
  );
};

export default BlogListView;
