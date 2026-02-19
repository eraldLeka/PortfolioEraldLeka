import React, { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import welcome from "./assets/Welcome.mp4";

import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion) return;

    const sections = Array.from(document.querySelectorAll(".main-content section"));
    if (sections.length === 0) return;

    sections.forEach((section) => {
      section.classList.add("reveal-on-scroll");
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="app-container">
      <div className="sidebar">
        <ProfileCard />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true); // nis fade-out
    }, 2500); // fillon zbehja pas 2.5 sekondash

    const hideTimer = setTimeout(() => {
      setShowIntro(false); // fsheh komplet pas 3 sekondash
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {showIntro ? (
        <div
          className={`intro-video-container ${fadeOut ? "hidden" : ""}`}
        >
          <video
            autoPlay
            muted
            playsInline
            className="intro-video"
          >
            <source src={welcome} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <Router>
          <AppLayout />
        </Router>
      )}
    </>
  );
}

export default App;
