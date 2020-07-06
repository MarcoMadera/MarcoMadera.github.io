import React, { useState, useEffect } from "react";
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
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const results = entries
      .map((e, i) => ({ title: e.title, id: i, tags: e.tags }))
      .filter((ob, i) =>
        ob.title.concat(ob.tags).toLowerCase().includes(search)
      );
    setSearchResults(results);
  }, [search]);

  return (
    <div className="Blog">
      <div className="container">
        <div className="row">
          <div className="Blog__col col-12 col-md-8">
            <div className="Blog__header">
              <h1 className="Blog__header__title">Entradas</h1>
              <div className="Blog__header_search">
                <input
                  className="search-text"
                  type="text"
                  placeholder="Buscar"
                  value={search}
                  onChange={handleChange}
                />
              </div>
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
              {searchResults
                .sort((a, b) =>
                  a["id"] > b["id"] ? -1 : a["id"] < b["id"] ? 1 : 0
                )
                .map((ob, num) => (
                  <BlogPost
                    key={entries[ob.id].id}
                    title={entries[ob.id].title}
                    author={entries[ob.id].author}
                    cover={entries[ob.id].cover}
                    coverWebp={entries[ob.id].coverWebp}
                    coverDescription={entries[ob.id].coverDescription}
                    excerpt={entries[ob.id].excerpt}
                    date={entries[ob.id].date}
                    tags={entries[ob.id].tags}
                    id={entries[ob.id].id}
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
