import React, { useRef, useEffect } from "react";
import "./styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSwitch } from "../actions";

function Navbar() {
  const darkMode = useSelector((state) => state.navbarReducer);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const refDark = useRef(null);

  function handleClick() {
    ref.current.classList.toggle("show");
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      refDark.current.checked = true;
    } else {
      document.body.classList.add("light-mode");
      refDark.current.checked = false;
    }
  }, []);

  let location = useLocation();
  let activeTab = {
    blogTab: undefined,
    portfolioTab: undefined,
    aboutTab: undefined,
    homeTab: undefined,
  };
  function HeaderView() {
    let header = undefined;

    switch (location.pathname.split("/")[1]) {
      case "blog":
        header = "Blog";
        activeTab.blogTab = "active";
        break;
      case "portfolio":
        header = "Portafolio";
        activeTab.portfolioTab = "active";
        break;
      case "about":
        header = "Sobre mí";
        activeTab.aboutTab = "active";
        break;
      default:
        header = "Inicio";
        activeTab.homeTab = "active";
        break;
    }
    return <h3>{header}</h3>;
  }

  return (
    <div className="Navbar" id="myNavbar">
      <div className="Navbar__mobileHeader">{HeaderView()}</div>
      <input
        type="checkbox"
        id="switch"
        ref={refDark}
        onChange={() => {
          dispatch(toggleSwitch());
        }}
      />
      <label className={`Navbar__navLink__switch`} htmlFor="switch"></label>
      <div className="container-fluid">
        <div id="sidebar" ref={ref} onClick={handleClick}>
          <div className="toggleBtn">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="Navbar__navLink">
            <li>
              <Link to="/">
                <span className={`font-weight-ligh ${activeTab.homeTab}`}>
                  Inicio
                </span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <span className={`font-weight-ligh ${activeTab.blogTab}`}>
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <span className={`font-weight-ligh ${activeTab.portfolioTab}`}>
                  Portafolio
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className={`font-weight-ligh ${activeTab.aboutTab}`}>
                  Sobre mí
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
