import React, { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import welcome from "./assets/Welcome.mp4";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <div className="app-container">
          <Router>
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
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
