import { TOGGLE_VIEW } from "../types/blogTypes";

const INITIAL_STATE = {
  listView: true,
  cardView: false,
  gridView: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_VIEW:
      if (action.payload == "listView") {
        return {
          ...state,
          listView: true,
          cardView: false,
          gridView: false,
        };
      }
      if (action.payload == "cardView") {
        return {
          ...state,
          listView: false,
          cardView: true,
          gridView: false,
        };
      }
      if (action.payload == "gridView") {
        return {
          ...state,
          listView: false,
          cardView: false,
          gridView: true,
        };
      }
    default:
      return state;
  }
};
