import React, { useRef, useState, useEffect } from "react";
import "./styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const { darkMode, setDarkMode } = props;
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.classList.toggle("show");
  };

  const handleChange = () => {
    if (localStorage.getItem("dark-mode") === "true") {
      localStorage.setItem("dark-mode", "false");
      document.body.attributes.length == 1
        ? document.body.removeAttribute("class")
        : document.body.classList.remove("dark-mode");
      return setDarkMode(!darkMode);
    } else {
      if (localStorage.getItem("dark-mode") === "false") {
        localStorage.setItem("dark-mode", "true");
        document.body.classList.add("dark-mode");
        return setDarkMode(!darkMode);
      } else {
        if (darkMode) {
          localStorage.setItem("dark-mode", "false");
          document.body.attributes.length == 1
            ? document.body.removeAttribute("class")
            : document.body.classList.remove("dark-mode");
          return setDarkMode(!darkMode);
        } else {
          localStorage.setItem("dark-mode", "true");
          document.body.classList.add("dark-mode");
          return setDarkMode(!darkMode);
        }
      }
    }
  };

  let location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(location.pathname.split("/")[1]);
  }, [location.pathname.split("/")[1]]);

  const HeaderView = () => {
    switch (tab) {
      case "blog":
        return <h3>Blog</h3>;
      case "portfolio":
        return <h3>Portafolio</h3>;
      case "about":
        return <h3>Sobre mí</h3>;
      default:
        return <h3>Inicio</h3>;
    }
  };

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
            if (darkMode) {
              document.body.classList.add("dark-mode");
            }
          }
        }
      })()}

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
                <span
                  className={`font-weight-ligh ${tab == "" ? "active" : ""}`}
                >
                  Inicio
                </span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <span
                  className={`font-weight-ligh ${
                    tab == "blog" ? "active" : ""
                  }`}
                >
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <span
                  className={`font-weight-ligh ${
                    tab == "portfolio" ? "active" : ""
                  }`}
                >
                  Portafolio
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span
                  className={`font-weight-ligh ${
                    tab == "about" ? "active" : ""
                  }`}
                >
                  Sobre mí
                </span>
              </Link>
            </li>
          </ul>
        </div>
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
                return darkMode;
              }
            }
          })()}
          onChange={() => {
            handleChange();
          }}
        />
        <label className={`Navbar__navLink__switch`} htmlFor="switch"></label>
      </div>
    </div>
  );
};

export default Navbar;
