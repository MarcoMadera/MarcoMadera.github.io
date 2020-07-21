import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const Layout = ({ darkMode, setDarkMode, children }) => {
  return (
    <React.Fragment>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
