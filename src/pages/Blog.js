import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleView } from "../actions";
import "./styles/Blog.css";
import BlogPost from "../components/BlogPost";
import { ListIcon, CardIcon, GridIcon } from "../components/Icons";
import { entries } from "./Blog/BlogEntries";
import useNearScreen from "../hooks/useNearScreen";
import debounce from "just-debounce-it";

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
  const [loading, setLoading] = useState(true);
  let [page, setPage] = useState(1);

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
    setPage(1);
    setLoading(false);
  }, [search]);

  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => (setPage((page += 1)), 1000)),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <div className="Blog">
      <div className="container">
        <div className="row">
          <div className="Blog__col col-12 col-md-8">
            <div className="Blog__header">
              <h1 className="Blog__header__title">Entradas</h1>
              <div className="Blog__header_search">
                <div className="Blog__header_searchbox">
                  <input
                    className="Blog__header_searchbox__input"
                    type="text"
                    placeholder="Buscar"
                    value={search}
                    onChange={handleChange}
                  />
                  <svg
                    className="searchbox__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 56.966 56.966"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </div>
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
              {searchResults == 0 ? (
                <div className="Blog__header__search__noresults">
                  <h4>¡Sin resultados!</h4>
                </div>
              ) : (
                searchResults
                  .sort((a, b) =>
                    a["id"] > b["id"] ? -1 : a["id"] < b["id"] ? 1 : 0
                  )
                  .map((ob, num) => {
                    if (num < page * 4) {
                      return (
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
                      );
                    }
                  })
              )}
              <div id="visor" ref={externalRef}></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
