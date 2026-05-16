import React, { Suspense, lazy } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const Achievements = lazy(() => import("./pages/Achievements"));

function App() {
  return (
    <Router>
      <Navbar />
      <main className="app">
        <div className="app__container">
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
      </main>
    </Router>
  );
}

export default App;
