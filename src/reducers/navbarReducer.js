import { TOGGLE_SWITCH } from "../types/navbarTypes";

const INITIAL_STATE = {
  darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      if (localStorage.getItem("dark-mode") === "true") {
        localStorage.setItem("dark-mode", "false");
        document.body.attributes.length == 1
          ? document.body.removeAttribute("class")
          : document.body.classList.remove("dark-mode");
        return !state;
      } else {
        if (localStorage.getItem("dark-mode") === "false") {
          localStorage.setItem("dark-mode", "true");
          document.body.classList.add("dark-mode");
          return !state;
        } else {
          if (state.darkMode) {
            localStorage.setItem("dark-mode", "false");
            document.body.attributes.length == 1
              ? document.body.removeAttribute("class")
              : document.body.classList.remove("dark-mode");
            return !state;
          } else {
            localStorage.setItem("dark-mode", "true");
            document.body.classList.add("dark-mode");
            return !state;
          }
        }
      }
    default:
      return state;
  }
};
