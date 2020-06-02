import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleView } from "../actions";
import "./styles/Blog.css";
import BlogPost from "../components/BlogPost";
import { ListIcon, CardIcon, GridIcon } from "../components/Icons";
import cover from "../images/image.jpg";
import coverWebp from "../images/image.webp";

function Blog() {
  let state = {
    listViewClassName: "selected",
    cardViewClassName: undefined,
    gridViewClassName: undefined,
    view: undefined,
  };
  const listView = useSelector((state) => state.blogReducer.listView);
  const cardView = useSelector((state) => state.blogReducer.cardView);
  const gridView = useSelector((state) => state.blogReducer.gridView);
  listView
    ? ((state.listViewClassName = "selected"), (state.view = undefined))
    : (state.listViewClassName = undefined);
  cardView
    ? ((state.cardViewClassName = "selected"), (state.view = undefined))
    : (state.cardViewClassName = undefined);
  gridView
    ? ((state.gridViewClassName = "selected"), (state.view = "Blog__gridView"))
    : (state.gridViewClassName = undefined);

  const dispatch = useDispatch();
  return (
    <div className="Blog">
      <div className="container">
        <div className="row">
          <div className="Blog__col col-12 col-md-8">
            <div className="Blog__header">
              <h1 className="Blog__header__title">Entradas</h1>
              <div className="Blog__View">
                <i
                  onClick={() => {
                    dispatch(toggleView("listView"));
                  }}
                  className={`text-reset text-decoration-none ${state.listViewClassName}`}
                >
                  <ListIcon />
                </i>
              </div>
              <div className="Blog__View">
                <i
                  onClick={() => {
                    dispatch(toggleView("cardView"));
                  }}
                  className={`text-reset text-decoration-none ${state.cardViewClassName}`}
                >
                  <CardIcon />
                </i>
              </div>
              <div className="Blog__View">
                <i
                  onClick={() => {
                    dispatch(toggleView("gridView"));
                  }}
                  className={`text-reset text-decoration-none ${state.gridViewClassName}`}
                >
                  <GridIcon />
                </i>
              </div>
            </div>
            <ul className={state.view}>
              <BlogPost
                title="Pseudo Aleatorios Números Pseudo Aleatorios "
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
