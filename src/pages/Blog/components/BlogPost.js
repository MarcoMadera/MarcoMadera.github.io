import React from "react";
import BlogListView from "./BlogListView";
import BlogGridView from "./BlogGridView";
import "./styles/BlogPost.css";
import PropTypes from "prop-types";

const BlogPost = ({ searchResults, view, page, loading, posts }) => {
  return (
    <>
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
      ) : !(searchResults.length === 0) ? (
        searchResults.map(
          (
            { link, creator, enclosure, contentSnippet, pubDate, title },
            index
          ) => {
            if (view.listView == true && index < page * 4) {
              return (
                <BlogListView
                  key={link}
                  link={link}
                  creator={creator}
                  enclosure={enclosure}
                  contentSnippet={contentSnippet}
                  pubDate={pubDate}
                  title={title}
                />
              );
            } else if (
              (view.gridView == true || view.cardView == true) &&
              index < page * 4
            ) {
              return (
                <BlogGridView
                  key={link}
                  link={link}
                  creator={creator}
                  enclosure={enclosure}
                  contentSnippet={contentSnippet}
                  pubDate={pubDate}
                  title={title}
                />
              );
            }
          }
        )
      ) : posts.length > 0 ? (
        posts.map(
          (
            { link, creator, enclosure, contentSnippet, pubDate, title },
            index
          ) => {
            if (view.listView == true && index < page * 4) {
              return (
                <BlogListView
                  key={link}
                  link={link}
                  creator={creator}
                  enclosure={enclosure}
                  contentSnippet={contentSnippet}
                  pubDate={pubDate}
                  title={title}
                />
              );
            } else if (
              (view.gridView == true || view.cardView == true) &&
              index < page * 4
            ) {
              return (
                <BlogGridView
                  key={link}
                  link={link}
                  creator={creator}
                  enclosure={enclosure}
                  contentSnippet={contentSnippet}
                  pubDate={pubDate}
                  title={title}
                />
              );
            }
          }
        )
      ) : null}
    </>
  );
};

BlogPost.propTypes = {
  searchResults: PropTypes.array,
  view: PropTypes.object,
  page: PropTypes.number,
  loading: PropTypes.bool,
  posts: PropTypes.array,
};

export default BlogPost;
