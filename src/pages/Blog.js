import React from "react";
import "./styles/Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripHorizontal,
  faList,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import cover from "../images/image.jpg";

let state = false;
let cls = "BlogList";

class BlogPost extends React.Component {
  List = () => (
    <Link
      className="text-reset text-decoration-none"
      to={`/blog${this.props.link ? this.props.link : ""}`}
    >
      <div className="BlogListItem">
        <img
          src={this.props.cover}
          alt={this.props.title}
          className="BlogListItem__preview"
        />
        <div>
          <p className="BlogEntry__title">
            {this.props.title}
            <br />
            {this.props.date} <br />
            {this.props.tags}
          </p>
        </div>
      </div>
    </Link>
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
    if (state == true) {
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
                  <FontAwesomeIcon
                    icon={faList}
                    size="2x"
                    onClick={(e) => {
                      state = true;
                      cls = "BlogList";
                    }}
                  />
                </Link>
              </div>
              <div className="Blog__orderView">
                <Link to="/blog" className="text-reset text-decoration-none">
                  <FontAwesomeIcon
                    icon={faListAlt}
                    size="2x"
                    onClick={(e) => {
                      state = false;
                      cls = "BlogList";
                    }}
                  />
                </Link>
              </div>
              <div className="Blog__orderView">
                <Link to="/blog" className="text-reset text-decoration-none">
                  <FontAwesomeIcon
                    icon={faGripHorizontal}
                    size="2x"
                    onClick={(e) => {
                      state = false;
                      cls = "Posts";
                    }}
                  />
                </Link>
              </div>
            </div>
            <section className={cls} id="Entries">
              <ul>
                <li>
                  <BlogPost
                    title="Números Pseudo Aleatorios"
                    cover={cover}
                    excerpt="Los números pseudo-aleatorios son creados a partir de algoritmos matemáticos, por lo que no se puede decir que son realmente aleatorios"
                    date="20/05/2020"
                    tags="#Estadística"
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
                    tags="#Estadística"
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
                    tags="#Estadística"
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
                    tags="#Estadística"
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
