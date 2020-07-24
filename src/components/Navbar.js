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
    if (localStorage.getItem("dark-mode") === "true" || darkMode === true) {
      localStorage.setItem("dark-mode", "false");
      document.body.attributes.length === 1
        ? document.body.removeAttribute("class")
        : document.body.classList.remove("dark-mode");
      return setDarkMode(false);
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "true");
      return setDarkMode(true);
    }
  };

  const location = useLocation();
  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {
    setCurrentTab(location.pathname.split("/")[1]);
  }, [location.pathname]);

  const HeaderView = () => {
    switch (currentTab) {
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

  const swipeSideBar = (event) => {
    let touch = event.targetTouches[0];
    const px = touch.pageX;
    const midpoint = Math.floor(window.screen.width / 3);
    if (px > midpoint) {
      ref.current.classList.add("show");
    } else {
      ref.current.classList.remove("show");
      ref.current.style.transition = "400ms";
    }
  };

  return (
    <>
      <nav className="Navbar" id="myNavbar" onTouchMove={swipeSideBar}>
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
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
        <aside className="Navbar__navLink" id="sidebar" ref={ref}>
          <ul>
            <li>
              <Link
                to="/"
                style={{ textDecoration: currentTab === "" && "underline" }}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                style={{ textDecoration: currentTab === "blog" && "underline" }}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                style={{
                  textDecoration: currentTab === "portfolio" && "underline",
                }}
              >
                Portafolio
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  textDecoration: currentTab === "about" && "underline",
                }}
              >
                Sobre mí
              </Link>
            </li>
          </ul>
        </aside>
        <header className="Navbar__mobileHeader">
          <div className="toggleBtn" onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {HeaderView()}
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
        </header>
      </nav>
    </>
  );
};

export default Navbar;
