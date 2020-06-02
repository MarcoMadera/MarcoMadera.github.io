import React from "react";
import { useSelector } from "react-redux";
import BlogListView from "./BlogListView";
import BlogGripView from "./BlogGripView";

const BlogPost = (props) => {
  let listView = useSelector((state) => state.blogReducer.listView);
  if (listView) {
    return (
      <ul>
        <li>
          <BlogListView
            title={props.title}
            cover={props.cover}
            coverWebp={props.coverWebp}
            excerpt={props.excerpt}
            date={props.date}
            tags={props.tags}
            link={props.link}
          />
        </li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li>
          <BlogGripView
            title={props.title}
            cover={props.cover}
            coverWebp={props.coverWebp}
            excerpt={props.excerpt}
            date={props.date}
            tags={props.tags}
            link={props.link}
          />
        </li>
      </ul>
    );
  }
};

export default BlogPost;
