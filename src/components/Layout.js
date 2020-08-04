import React, {Fragment} from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import PropTypes from "prop-types";

const Layout = ({ darkMode, setDarkMode, children }) => {
  return (
    <Fragment>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  darkMode: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  setDarkMode: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Layout;
