import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar theme={props.theme} setTheme={props.setTheme} />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
