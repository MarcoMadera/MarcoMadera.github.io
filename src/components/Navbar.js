import React, { useRef } from "react";
import "./styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSwitch } from "../actions";

function Navbar() {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const theme = useSelector((state) => state.navbarReducer);

  function handleClick() {
    ref.current.classList.toggle("show");
  }

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

  const swipe = (event) => {
    let touch = event.targetTouches[0];
    const px = touch.pageX;
    const midpoint = Math.floor(screen.width / 3);
    if (px > midpoint) {
      ref.current.classList.add("show");
    } else {
      ref.current.classList.remove("show");
      ref.current.style.transition = "400ms";
    }
  };

  return (
    <div className="Navbar" id="myNavbar" onTouchMove={swipe}>
      <div className="Navbar__mobileHeader">{HeaderView()}</div>
      {(() => {
        if (localStorage.getItem("dark-mode") === "false") {
          document.body.classList.remove("dark-mode");
        } else {
          if (localStorage.getItem("dark-mode") === "true") {
            document.body.classList.add("dark-mode");
          } else {
            if (theme.darkMode) {
              document.body.classList.add("dark-mode");
              localStorage.setItem("dark-mode", "true");
            }
          }
        }
      })()}
      <input
        type="checkbox"
        id="switch"
        defaultChecked={(() => {
          if (localStorage.getItem("dark-mode") === "false") {
            return false;
          } else {
            if (localStorage.getItem("dark-mode") === "true") {
              return true;
            } else {
              return theme.darkMode;
            }
          }
        })()}
        onChange={() => {
          console.log("cambio onchange");
          dispatch(toggleSwitch());
        }}
      />
      <label className={`Navbar__navLink__switch`} htmlFor="switch"></label>
      <div className="container-fluid">
        <div id="sidebar" ref={ref}>
          <div className="toggleBtn" onClick={handleClick}>
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
