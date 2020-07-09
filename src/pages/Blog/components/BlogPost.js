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
          .map((ob, num) => {
            if (view.listView == true && num < page * 4) {
              return (
                <BlogListView
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
            } else if (
              (view.gridView == true || view.cardView == true) &&
              num < page * 4
            ) {
              return (
                <BlogGridView
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
    </Fragment>
  );
};

export default BlogPost;
