import { TOGGLE_VIEW } from "../types/blogTypes";
import { TOGGLE_SWITCH } from "../types/navbarTypes";

export const toggleView = (view) => ({
  type: TOGGLE_VIEW,
  payload: view,
});
export const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});
