import React from "react";

const ThemeContext = React.createContext(
  localStorage.getItem("dark-mode") ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
);

export default ThemeContext;
