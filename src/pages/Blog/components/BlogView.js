import React, { Fragment } from "react";
import ListIcon from "../../../components/icons/ListIcon";
import CardIcon from "../../../components/icons/CardIcon";
import GridIcon from "../../../components/icons/GridIcon";
import "./styles/BlogView.css";

const BlogView = (props) => {
  const { view, setView } = props;
  return (
    <Fragment>
      <div
        onClick={() => {
          setView({ listView: true, cardView: false, gridView: false });
        }}
        className={`Blog__View ${view.listView ? "selected" : ""}`}
      >
        <ListIcon />
      </div>
      <div
        onClick={() => {
          setView({ listView: false, cardView: true, gridView: false });
        }}
        className={`Blog__View ${view.cardView ? "selected" : ""}`}
      >
        <CardIcon />
      </div>
      <div
        onClick={() => {
          setView({ listView: false, cardView: false, gridView: true });
        }}
        className={`Blog__View ${view.gridView ? "selected" : ""}`}
      >
        <GridIcon />
      </div>
    </Fragment>
  );
};

export default BlogView;
