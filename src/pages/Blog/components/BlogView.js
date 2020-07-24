import React, { Fragment } from "react";
import ListIcon from "../../../components/icons/ListIcon";
import CardIcon from "../../../components/icons/CardIcon";
import GridIcon from "../../../components/icons/GridIcon";
import "./styles/BlogView.css";

const BlogView = ({ view, setView }) => {
  return (
    <Fragment>
      <button>
        <ListIcon
          onClick={() => {
            setView({ listView: true, cardView: false, gridView: false });
          }}
          className={`Blog__View ${view.listView ? "selected" : ""}`}
        />
      </button>
      <button>
        <CardIcon
          onClick={() => {
            setView({ listView: false, cardView: true, gridView: false });
          }}
          className={`Blog__View ${view.cardView ? "selected" : ""}`}
        />
      </button>
      <button>
        <GridIcon
          onClick={() => {
            setView({ listView: false, cardView: false, gridView: true });
          }}
          className={`Blog__View ${view.gridView ? "selected" : ""}`}
        />
      </button>
    </Fragment>
  );
};

export default BlogView;
