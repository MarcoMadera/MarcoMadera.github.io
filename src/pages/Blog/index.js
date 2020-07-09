import React, { useState, useEffect, useRef, useCallback } from "react";
import "./styles/index.css";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";
import BlogSearch from "./components/BlogSearch";
import BlogPost from "./components/BlogPost";
import BlogView from "./components/BlogView";

function Blog() {
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [view, setView] = useState({
    listView: true,
    cardView: false,
    gridView: false,
  });

  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => (setPage((page) => page + 1), 1000)),
    []
  );

  useEffect(() => {
    if (isNearScreen && page * 4 < searchResults.length)
      debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <div className="Blog">
      <div className="container">
        <div className="row">
          <div className="Blog__col col-12 col-md-8">
            <div className="Blog__header">
              <h1 className="Blog__header__title">Entradas</h1>
              <div className="Blog__header_search">
                <BlogSearch
                  setSearchResults={setSearchResults}
                  setLoading={setLoading}
                  setPage={setPage}
                />
              </div>
              <BlogView view={view} setView={setView} />
            </div>
            <ul className={view.gridView ? "Blog__gridView" : ""}>
              <BlogPost searchResults={searchResults} view={view} page={page} />
              <div ref={externalRef}></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
