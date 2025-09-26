import React, { useEffect, useState } from "react"; 
import ProfileCard from "./components/ProfileCard";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import welcome from "./assets/Welcome.mp4"; 
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [showIntro, setShowIntro] = useState(true); // State për të kontrolluar intro-në

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false); // Fsheh intro-në pas 6 sekondave
    }, 3000);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Nëse showIntro është true, shfaq vetëm intro-në (mbulon të gjithë app-in)
  if (showIntro) {
    return (
      <div className="intro-video-container">
        <video autoPlay  muted playsInline className="intro-video">
          <source src={welcome} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  // Struktura normale e app-it pas intro-s
  return (

    <div className="app-container">
      <Router>

      <div className="sidebar">
        <ProfileCard />
      </div>

      <div className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Achievements" element={<Achievements/>}/>
      </Routes>

      </div>
      </Router>
    </div>
  );
}

export default App;
