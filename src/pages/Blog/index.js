import React, { useState, useEffect, useRef, useCallback } from "react";
import "./styles/index.css";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";
import BlogSearch from "./components/BlogSearch";
import BlogPost from "./components/BlogPost";
import BlogView from "./components/BlogView";
import { useParams } from "react-router-dom";
import MetaData from "../../components/MetaData";

const Blog = () => {
  const { tag } = useParams();
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
    // eslint-disable-next-line no-sequences
    debounce(() => (setPage((page) => page + 1), 1000)),
    []
  );

  useEffect(() => {
    if (isNearScreen && page * 4 < searchResults.length)
      debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen, page, searchResults]);

  return (
    <main className="Blog container" id="main">
      <MetaData
        title="Marco Madera | Blog"
        description="Aquí puedes encontrar las entradas de blog"
      />
      <header className="Blog__header">
        <h1 className="Blog__header__title">Entradas</h1>
        <BlogSearch
          setSearchResults={setSearchResults}
          setLoading={setLoading}
          setPage={setPage}
          tag={tag}
          loading={loading}
        />
        <BlogView view={view} setView={setView} />
      </header>
      <ul className={view.gridView ? "Blog__gridView" : ""}>
        <BlogPost
          searchResults={searchResults}
          view={view}
          page={page}
          tag={tag}
          loading={loading}
        />
        <div ref={externalRef}></div>
      </ul>
    </main>
  );
};
export default Blog;
