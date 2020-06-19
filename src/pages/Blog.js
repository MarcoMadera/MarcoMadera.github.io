import React from "react";
import { useSelector, useDispatch, useState } from "react-redux";
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
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  React.useEffect(() => {
    const results = entries
      .map((e, i) => {
        return { title: e.title, id: e.id };
      })
      .filter((ob, i) => ob.title.toLowerCase().includes(search));
    setSearchResults(results);
  }, [search]);
  return (
    <div className="Blog">
      <div className="container">
        <div className="row">
          <div className="Blog__col col-12 col-md-8">
            <div className="Blog__header">
              <h1 className="Blog__header__title">Entradas</h1>
              <input
                type="text"
                placeholder="Buscar"
                value={search}
                onChange={handleChange}
              />
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
              {searchResults.map((ob, num) => (
                <BlogPost
                  key={entries[ob.id - 1].id}
                  title={entries[ob.id - 1].title}
                  author={entries[ob.id - 1].author}
                  cover={entries[ob.id - 1].cover}
                  coverWebp={entries[ob.id - 1].coverWebp}
                  coverDescription={entries[ob.id - 1].coverDescription}
                  excerpt={entries[ob.id - 1].excerpt}
                  date={entries[ob.id - 1].date}
                  tags={entries[ob.id - 1].tags}
                  id={entries[ob.id - 1].id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
