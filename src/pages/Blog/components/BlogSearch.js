import React, { useState, useEffect, memo } from "react";
import "./styles/BlogSearch.css";
import SearchIcon from "../../../components/icons/SearchIcon";
import PropTypes from "prop-types";

const BlogSearch = ({ resetScrollPage, searchBlogEntries, posts, loading }) => {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const results = posts.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase())
    );
    searchBlogEntries(results);
    resetScrollPage();
  }, [search, posts, loading, resetScrollPage, searchBlogEntries]);

  return (
    <form className="Blog__header_searchbox">
      <input
        className="Blog__header_searchbox__input"
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={handleChange}
        autoCapitalize="off"
        autoCorrect="off"
        maxLength="100"
        spellCheck="false"
      />
      <SearchIcon className="searchbox__icon" />
    </form>
  );
};

BlogSearch.propTypes = {
  resetScrollPage: PropTypes.func,
  searchBlogEntries: PropTypes.func,
  posts: PropTypes.array,
  loading: PropTypes.bool,
};

export default memo(BlogSearch);
