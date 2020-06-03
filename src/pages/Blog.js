import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleView } from "../actions";
import "./styles/Blog.css";
import BlogPost from "../components/BlogPost";
import { ListIcon, CardIcon, GridIcon } from "../components/Icons";
import { entries } from "./Blog/BlogEntries";

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
  const blogEntries = entries.map(
    (
      {
        title,
        author,
        cover,
        coverWebp,
        coverDescription,
        excerpt,
        date,
        tags,
        link,
      },
      i
    ) => (
      <BlogPost
        key={i}
        title={title}
        author={author}
        cover={cover}
        coverWebp={coverWebp}
        coverDescription={coverDescription}
        excerpt={excerpt}
        date={date}
        tags={tags}
        link={link}
      />
    )
  );
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
            <ul className={state.view}>{blogEntries}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
