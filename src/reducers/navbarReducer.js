import { TOGGLE_SWITCH } from "../types/navbarTypes";

const INITIAL_STATE = {
  darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      if (state) {
        document.body.attributes.length == 1
          ? document.body.removeAttribute("class")
          : document.body.classList.remove("dark-mode");
        return !state;
      } else {
        document.body.classList.add("dark-mode");
        return !state;
      }
    default:
      return state;
  }
};
