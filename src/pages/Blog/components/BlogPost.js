import React, { Fragment } from "react";
import BlogListView from "./BlogListView";
import { entries } from "../BlogEntries";
import BlogGridView from "./BlogGridView";
import "./styles/BlogPost.css";
import PropTypes from "prop-types";
const BlogPost = ( { searchResults, view, page, tag, loading }) => {

  const post = (toPost) =>
    toPost
      .sort((a, b) => (a["id"] > b["id"] ? -1 : a["id"] < b["id"] ? 1 : 0))
      .map((blog, num) => {
        if (view.listView == true && num < page * 4) {
          return (
            <BlogListView
              key={blog.id}
              {...entries.find((blogs) => blogs.id == blog.id)}
            />
          );
        } else if (
          (view.gridView == true || view.cardView == true) &&
          num < page * 4
        ) {
          return (
            <BlogGridView
              key={blog.id}
              {...entries.find((blogs) => blogs.id == blog.id)}
            />
          );
        }
      });

  return (
    <Fragment>
      {searchResults.length === 0 && !loading ? (
        <div className="Blog__header__search__noresults">
          <h4>¡Sin resultados!</h4>
        </div>
      ) : searchResults.length === 0 && loading ? (
        <div className="Blog__header__search__noresults">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : searchResults.length > 0 && tag ? (
        post(searchResults.filter((result) => result.tags.includes(tag)))
      ) : (
        post(searchResults)
      )}
    </Fragment>
  );
};

BlogPost.propTypes = {
  searchResults: PropTypes.array,
  view: PropTypes.object,
  page:PropTypes.number,
  tag: PropTypes.string,
  loading: PropTypes.bool,
};

export default BlogPost;
