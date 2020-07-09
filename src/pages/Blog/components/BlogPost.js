import React, { Fragment } from "react";
import BlogListView from "./BlogListView";
import { entries } from "../BlogEntries";
import BlogGridView from "./BlogGridView";

const BlogPost = (props) => {
  const { searchResults, view, page } = props;

  return (
    <Fragment>
      {searchResults == 0 ? (
        <div className="Blog__header__search__noresults">
          <h4>¡Sin resultados!</h4>
        </div>
      ) : (
        searchResults
          .sort((a, b) => (a["id"] > b["id"] ? -1 : a["id"] < b["id"] ? 1 : 0))
          .map((blog, num) => {
            if (view.listView == true && num < page * 4) {
              return <BlogListView key={blog.id} {...entries[blog.id]} />;
            } else if (
              (view.gridView == true || view.cardView == true) &&
              num < page * 4
            ) {
              return <BlogGridView key={blog.id} {...entries[blog.id]} />;
            }
          })
      )}
    </Fragment>
  );
};

export default BlogPost;
