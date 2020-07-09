import React, { Fragment } from "react";
import { ListIcon, CardIcon, GridIcon } from "../../../components/Icons";

const BlogView = (props) => {
  const { view, setView } = props;
  return (
    <Fragment>
      <div className="Blog__View">
        <i
          onClick={() => {
            setView({ listView: true, cardView: false, gridView: false });
          }}
          className={`text-reset text-decoration-none ${
            view.listView ? "selected" : ""
          }`}
        >
          <ListIcon />
        </i>
      </div>
      <div className="Blog__View">
        <i
          onClick={() => {
            setView({ listView: false, cardView: true, gridView: false });
          }}
          className={`text-reset text-decoration-none ${
            view.cardView ? "selected" : ""
          }`}
        >
          <CardIcon />
        </i>
      </div>
      <div className="Blog__View">
        <i
          onClick={() => {
            setView({ listView: false, cardView: false, gridView: true });
          }}
          className={`text-reset text-decoration-none ${
            view.gridView ? "selected" : ""
          }`}
        >
          <GridIcon />
        </i>
      </div>
    </Fragment>
  );
};

export default BlogView;
