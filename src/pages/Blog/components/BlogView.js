import React, { Fragment } from "react";
import ListIcon from "../../../components/icons/ListIcon";
import CardIcon from "../../../components/icons/CardIcon";
import GridIcon from "../../../components/icons/GridIcon";
import "./styles/BlogView.css";
import PropTypes from "prop-types";

const BlogView = ({ view, setView }) => {
  return (
    <Fragment>
      <button
        onClick={() => {
          setView({ listView: true, cardView: false, gridView: false });
        }}
        className={view.listView ? "Blog__View selected" : "Blog__View"}
        aria-label="Vista de lista"
      >
        <ListIcon />
      </button>
      <button
        onClick={() => {
          setView({ listView: false, cardView: true, gridView: false });
        }}
        className={view.cardView ? "Blog__View selected" : "Blog__View"}
        aria-label="Vista de tarjeta"
      >
        <CardIcon/>
      </button>
      <button
        onClick={() => {
          setView({ listView: false, cardView: false, gridView: true });
        }}
        className={view.gridView ? "Blog__View selected" : "Blog__View"}
        aria-label="Vista de cuadrícula"
      >
        <GridIcon />
      </button>
    </Fragment>
  );
};

BlogView.propTypes = {
  view: PropTypes.object,
  setView: PropTypes.func,
};

export default BlogView;
