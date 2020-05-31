import React from "react";
import "./styles/Blog.css";
import { Link } from "react-router-dom";

import cover from "../images/image.jpg";

let state = {
  view: "List",
  type: "BlogList",
  faList: "selected",
  faListAlt: "",
  faGripHorizontal: "",
};

class BlogPost extends React.Component {
  List = () => (
    <div className="BlogListItem">
      <Link
        className="text-reset text-decoration-none"
        to={`/blog${this.props.link ? this.props.link : ""}`}
      >
        <div>
          <div className="BlogListItem__grid">
            <div>
              <h4 className="BlogEntry__title">{this.props.title}</h4>
              <p className="BlogEntry__excerpt">
                {this.props.excerpt}
                <span>
                  ... <span className="BlogList__readMore">Leer más</span>
                </span>
              </p>
            </div>
            <img
              src={this.props.cover}
              alt={this.props.title}
              className="BlogListItem__preview"
            />
          </div>
        </div>
      </Link>
      <footer>
        <div className="BlogEntry__meta">
          {(() => {
            let tags = [];
            for (let i = 0; i < this.props.tags.length; i++) {
              tags.push(
                <span key={i}>
                  <Link
                    className="text-reset text-decoration-none"
                    to={`/blog/tag/${this.props.tags[i]}`}
                  >
                    <span className="BlogEntry__tags">
                      #{this.props.tags[i]}
                    </span>{" "}
                  </Link>
                </span>
              );
            }
            return tags;
          })()}
        </div>
        <p className="BlogList__metaName">Marco Madera | {this.props.date}</p>
      </footer>
    </div>
  );

  Grid = () => (
    <React.Fragment>
      <article className="post">
        <header className="post__header">
          <Link
            className="text-reset text-decoration-none"
            to={`/blog${this.props.link ? this.props.link : ""}`}
          >
            <img
              src={this.props.cover}
              alt={this.props.title}
              className="Post__cover"
            />
          </Link>
          <div className="content">
            <Link
              className="text-reset text-decoration-none"
              to={`/blog${this.props.link ? this.props.link : ""}`}
            >
              <h4 className="post__title">{this.props.title}</h4>
            </Link>
            <p className="excerpt">{this.props.excerpt}</p>
          </div>
        </header>
        <footer className="post__meta">
          <span className="post__date">{this.props.date}</span>
          <Link
            className="text-reset text-decoration-none"
            to={`/blog${this.props.link ? this.props.link : ""}`}
          >
            <span className="post__more"> Leer más</span>
          </Link>
        </footer>
      </article>
    </React.Fragment>
  );

  render() {
    if (state.view == "List") {
      return this.List();
    } else {
      return this.Grid();
    }
  }
}

function Blog(props) {
  return (
    <div className="Blog">
      <div className="container">
        <div className="row">
          <div className="Blog__col col-12 col-md-8">
            <div className="Blog__header">
              <h1>Blog</h1>
              <div className="Blog__orderView">
                <Link to="/blog" className="text-reset text-decoration-none">
                  <i
                    className={`fas fa-list ${state.faList}`}
                    onClick={(e) => {
                      state.view = "List";
                      state.type = "BlogList";
                      state.faList = "selected";
                      state.faListAlt = "";
                      state.faGripHorizontal = "";
                    }}
                  />
                </Link>
              </div>
              <div className="Blog__orderView">
                <Link to="/blog" className="text-reset text-decoration-none">
                  <i
                    className={`fas fa-list-alt ${state.faListAlt}`}
                    onClick={(e) => {
                      state.view = "Grid";
                      state.type = "BlogList";
                      state.faList = "";
                      state.faListAlt = "selected";
                      state.faGripHorizontal = "";
                    }}
                  />
                </Link>
              </div>
              <div className="Blog__orderView">
                <Link to="/blog" className="text-reset text-decoration-none">
                  <i
                    className={`fas fa-grip-horizontal ${state.faGripHorizontal}`}
                    size="2x"
                    onClick={(e) => {
                      state.view = "Grid";
                      state.type = "Posts";
                      state.faList = "";
                      state.faListAlt = "";
                      state.faGripHorizontal = "selected";
                    }}
                  />
                </Link>
              </div>
            </div>
            <section className={state.type} id="Entries">
              <ul>
                <li>
                  <BlogPost
                    title="Números Pseudo Aleatorios Números Pseudo Aleatorios Números Pseudo Aleatorios Números Pseudo Aleatorios "
                    cover={cover}
                    excerpt="Los números pseudo-aleatorios son creados a partir de algoritmos matemáticos, por lo que no se puede decir que son realmente aleatorios"
                    date="20/05/2020"
                    tags={["Estadística", "Matematicas"]}
                    link="/Pseudo-Random-numbers"
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <BlogPost
                    title="Números Pseudo Aleatorios"
                    cover={cover}
                    excerpt="Los números pseudo-aleatorios son creados a partir de algoritmos matemáticos, por lo que no se puede decir que son realmente aleatorios"
                    date="20/05/2020"
                    tags={["Estadística", "Fisica"]}
                    link="/Pseudo-Random-numbers"
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <BlogPost
                    title="Números Pseudo Aleatorios"
                    cover={cover}
                    excerpt="Los números pseudo-aleatorios son creados a partir de algoritmos matemáticos, por lo que no se puede decir que son realmente aleatorios"
                    date="20/05/2020"
                    tags={["Estadística", "Matematicas", "Ciencias"]}
                    link="/Pseudo-Random-numbers"
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <BlogPost
                    title="Números Pseudo Aleatorios"
                    cover={cover}
                    excerpt="Los números pseudo-aleatorios son creados a partir de algoritmos matemáticos, por lo que no se puede decir que son realmente aleatorios"
                    date="20/05/2020"
                    tags={["Estadística", "Matematicas"]}
                    link="/Pseudo-Random-numbers"
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <BlogPost
                    title="Números Pseudo Aleatorios"
                    cover={cover}
                    excerpt="Los números pseudo-aleatorios son creados a partir de algoritmos matemáticos, por lo que no se puede decir que son realmente aleatorios"
                    date="20/05/2020"
                    tags={["Estadística", "Matematicas"]}
                    link="/Pseudo-Random-numbers"
                  />
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
