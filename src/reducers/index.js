import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import navbarReducer from "./navbarReducer";

export default combineReducers({
  blogReducer,
  navbarReducer,
});
