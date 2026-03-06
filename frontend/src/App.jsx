import React, { Suspense, lazy, useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import welcome from "./assets/Welcome.mp4";

import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const Achievements = lazy(() => import("./pages/Achievements"));

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500); 

    const hideTimer = setTimeout(() => {
      setShowIntro(false); 
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
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/achievements" element={<Achievements />} />
                </Routes>
              </Suspense>
            </div>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
