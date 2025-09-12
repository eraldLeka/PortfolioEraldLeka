import React, { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [navActive, setNavActive] = useState(false);

  const sections = ["home", "about", "projects", "skills", "contact"];

  const handleNavClick = (section) => {
    setNavActive(false); // mbyll menun pas klikimit
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document
        .getElementById(section)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleMenu = () => {
    setNavActive(!navActive);
  };

  return (
<nav className={`navbar ${theme}`}>
  <div className="logo">WebDev</div>

  <ul className={`nav-links ${navActive ? "nav-active" : ""}`}>
    {sections.map((section) => (
      <li key={section}>
        <a onClick={() => handleNavClick(section)}>
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      </li>
    ))}
  </ul>

  <div className="navbar-right">
    <div className={`hamburger ${navActive ? "toggle" : ""}`} onClick={toggleMenu}>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  </div>
</nav>

  );
};

export default Navbar;
