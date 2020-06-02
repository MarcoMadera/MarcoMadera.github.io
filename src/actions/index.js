import { TOGGLE_VIEW } from "../types/blogTypes";

export const toggleMenuView = (view) => ({
  type: TOGGLE_VIEW,
  payload: view,
});
