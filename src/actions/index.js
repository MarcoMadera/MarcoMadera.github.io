import { TOGGLE_VIEW } from "../types/blogTypes";

export const toggleView = (view) => ({
  type: TOGGLE_VIEW,
  payload: view,
});
