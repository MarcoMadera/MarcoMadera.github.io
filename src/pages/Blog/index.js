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

  const resetScrollPage = useCallback(() => {
    setPage(1);
    setLoading(false);
  }, []);
  const searchBlogEntries = useCallback((results) => {
    setSearchResults(results);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((page) => page + 1), 200),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen, searchResults]);

  return (
    <main className="Blog container" id="main">
      <MetaData
        title="Marco Madera | Blog"
        description="Aquí puedes encontrar las entradas de blog"
      />
      <header className="Blog__header">
        <h1 className="Blog__header__title">Entradas</h1>
        <BlogSearch
          searchBlogEntries={searchBlogEntries}
          resetScrollPage={resetScrollPage}
          tag={tag}
          loading={loading}
        />
        <BlogView view={view} setView={setView} />
      </header>
      <p>
        Las entradas del blog se seguirán actualizando, pero no están creadas
        para esta página, para una mejor experiencia visita la página
        actualizada{" "}
        <a href="https://marcomadera.com">https://marcomadera.com</a>
      </p>
      <ul className={view.gridView ? "Blog__gridView" : undefined}>
        <BlogPost
          searchResults={searchResults}
          view={view}
          page={page}
          tag={tag}
          loading={loading}
        />
      </ul>
      <div ref={externalRef}></div>
    </main>
  );
};
export default Blog;
