import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
