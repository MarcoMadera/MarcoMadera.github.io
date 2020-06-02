import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenuView } from "../actions";
import "./styles/Blog.css";
import BlogPost from "../components/BlogPost";
import {
  ListMenuIcon,
  LisWrapMenuIcon,
  GridMenuIcon,
} from "../components/Icons";
import cover from "../images/image.jpg";
import coverWebp from "../images/image.webp";

function Blog() {
  let state = {
    listViewClassName: "",
    cardViewclassName: "",
    gridViewclassName: "",
    type: "",
  };
  const listView = useSelector((state) => state.blogReducer.listView);
  const cardView = useSelector((state) => state.blogReducer.cardView);
  const gridView = useSelector((state) => state.blogReducer.gridView);
  listView
    ? ((state.listViewClassName = "selected"), (state.type = "list"))
    : (state.listViewClassName = "");
  cardView
    ? ((state.cardViewClassName = "selected"), (state.type = "list"))
    : (state.cardViewClassName = "");
  gridView
    ? ((state.gridViewClassName = "selected"), (state.type = "Posts"))
    : (state.gridViewClassName = "");

  const dispatch = useDispatch();
  return (
    <div className="Blog">
      <div className="container">
        <div className="row">
          <div className="Blog__col col-12 col-md-8">
            <div className="Blog__header">
              <h1>Blog</h1>
              <div className="Blog__orderView">
                <i
                  onClick={() => {
                    dispatch(toggleMenuView("listView"));
                  }}
                  className={`text-reset text-decoration-none ${state.listViewClassName}`}
                >
                  <ListMenuIcon />
                </i>
              </div>
              <div className="Blog__orderView">
                <i
                  onClick={() => {
                    dispatch(toggleMenuView("cardView"));
                  }}
                  className={`text-reset text-decoration-none ${state.cardViewclassName}`}
                >
                  <LisWrapMenuIcon />
                </i>
              </div>
              <div className="Blog__orderView">
                <i
                  onClick={() => {
                    dispatch(toggleMenuView("gridView"));
                  }}
                  className={`text-reset text-decoration-none ${state.gridViewclassName}`}
                >
                  <GridMenuIcon />
                </i>
              </div>
            </div>
            <section className={state.type} id="Entries">
              <BlogPost
                title="Números Pseudo Aleatorios Números Pseudo Aleatorios Números Pseudo Aleatorios Números Pseudo Aleatorios "
                cover={cover}
                coverWebp={coverWebp}
                excerpt="Los números pseudo-aleatorios son creados a partir de algoritmos matemáticos, por lo que no se puede decir que son realmente aleatorios"
                date="20/05/2020"
                tags={["Estadística", "Matematicas"]}
                link="/Pseudo-Random-numbers"
              />
              <BlogPost
                title="Números Pseudo Aleatorios"
                cover={cover}
                coverWebp={coverWebp}
                excerpt="Los números pseudo-aleatorios son creados a partir de algoritmos matemáticos, por lo que no se puede decir que son realmente aleatorios"
                date="20/05/2020"
                tags={["Estadística", "Fisica"]}
                link="/Pseudo-Random-numbers"
              />
              <BlogPost
                title="Números Pseudo Aleatorios"
                cover={cover}
                coverWebp={coverWebp}
                excerpt="Los números pseudo-aleatorios son creados a partir de algoritmos matemáticos, por lo que no se puede decir que son realmente aleatorios"
                date="20/05/2020"
                tags={["Estadística", "Matematicas", "Ciencias"]}
                link="/Pseudo-Random-numbers"
              />
              <BlogPost
                title="Números Pseudo Aleatorios"
                cover={cover}
                coverWebp={coverWebp}
                excerpt="Los números pseudo-aleatorios son creados a partir de algoritmos matemáticos, por lo que no se puede decir que son realmente aleatorios"
                date="20/05/2020"
                tags={["Estadística", "Matematicas"]}
                link="/Pseudo-Random-numbers"
              />
              <BlogPost
                title="Números Pseudo Aleatorios"
                cover={cover}
                coverWebp={coverWebp}
                excerpt="Los números pseudo-aleatorios son creados a partir de algoritmos matemáticos, por lo que no se puede decir que son realmente aleatorios"
                date="20/05/2020"
                tags={["Estadística", "Matematicas"]}
                link="/Pseudo-Random-numbers"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
