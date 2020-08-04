import React, { useState, useEffect, memo } from "react";
import "./styles/BlogSearch.css";
import { entries } from "../BlogEntries";
import SearchIcon from "../../../components/icons/SearchIcon";
import PropTypes from "prop-types";

const BlogSearch = ({ resetScrollPage, searchBlogEntries, tag, loading }) => {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (tag && loading) {
      const results = entries
        .filter((result) => result.tags.includes(tag))
        .map((blog) => ({ title: blog.title, id: blog.id, tags: tag }))
        .filter((blog) =>
          blog.title.toLowerCase().includes(search.toLowerCase())
        );
      searchBlogEntries(results);
    } else {
      const results = entries
        .map((blog) => ({ title: blog.title, id: blog.id, tags: blog.tags }))
        .filter((blog) =>
          blog.title
            .concat(blog.tags)
            .toLowerCase()
            .includes(search.toLowerCase())
        );
      searchBlogEntries(results);
    }
    resetScrollPage();
  }, [search, tag, loading, resetScrollPage, searchBlogEntries]);

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
  tag: PropTypes.string,
  loading: PropTypes.bool,
};

export default memo(BlogSearch);
