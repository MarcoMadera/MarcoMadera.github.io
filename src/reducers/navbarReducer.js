import { TOGGLE_SWITCH } from "../types/navbarTypes";

const INITIAL_STATE = {
  darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      console.log("Llega al reducer", state);
      if (state == true) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        return !state;
      } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        return !state;
      }
    default:
      return state.darkMode;
  }
};
