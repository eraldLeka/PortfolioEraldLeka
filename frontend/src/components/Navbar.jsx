import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const NAV_ITEMS = [
  { to: "/", label: "Home", num: "01" },
  { to: "/about", label: "About", num: "02" },
  { to: "/projects", label: "Projects", num: "03" },
  { to: "/achievements", label: "Achievements", num: "04" },
  { to: "/contact", label: "Contact", num: "05" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const activePath = useMemo(() => {
    if (location.pathname === "/") return "/";
    return location.pathname.replace(/\/+$/, "");
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [activePath]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const scrollY = window.scrollY || 0;
    const prev = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflowY: document.body.style.overflowY,
    };

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.left = prev.left;
      document.body.style.right = prev.right;
      document.body.style.width = prev.width;
      document.body.style.overflowY = prev.overflowY;
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo" aria-label="Home">
          EL
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav__link ${activePath === item.to ? "is-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="nav__menuBtn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="navOverlay"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`nav__menuIcon ${menuOpen ? "is-open" : ""}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="navOverlay"
        className={`navOverlay ${menuOpen ? "navOverlay--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        onClick={() => setMenuOpen(false)}
      >
        <div className="navOverlay__panel" onClick={(e) => e.stopPropagation()}>
          <div className="navOverlay__top">
            <span className="navOverlay__label">Navigation</span>
            <button
              type="button"
              className="navOverlay__close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close"
            >
              Close
            </button>
          </div>

          <div className="navOverlay__links">
            {NAV_ITEMS.map((item) => (
              <Link
                key={`overlay-${item.to}`}
                to={item.to}
                className={`navOverlay__link ${activePath === item.to ? "is-active" : ""}`}
              >
                <span className="navOverlay__mono">{item.num}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
