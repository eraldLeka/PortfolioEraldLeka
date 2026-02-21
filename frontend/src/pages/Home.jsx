import React from "react"; // Hiq useEffect/useState – nuk nevojiten më
import "../styles/Home.css";
import heroVideo from "../assets/heroVideo.mp4";
import Technologies from "../components/Technologies.jsx";
import pr1 from "../assets/pr1.png";
import pr2 from "../assets/pr2.png";
import LazyVideo from "../components/LazyVideo.jsx";
import LazyImage from "../components/LazyImage.jsx";
import { FaReact, FaPython, FaJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMysql, SiDocker, SiFastapi,SiPostgresql, SiR } from "react-icons/si";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section"> {/* Bashkim i hero-container + hero-video-section */}
        <LazyVideo
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="hero-video"
          rootMargin="600px"
        >
          Your browser does not support the video tag.
        </LazyVideo>
      </section>

      <section className="skills">
         <h2 className="section-title">My Skills</h2>
        <Technologies/>
      </section>

      <section className="featured-projects">
  <h2 className="section-title">New Projects</h2>
  <div className="projects-grid">
    <div className="project-card">
      <LazyImage src={pr1} alt="Incident Management App" className="project-img" />
      <h3>Incident Management App</h3>
      <p>A full-stack web application designed to streamline the process of reporting, tracking, and resolving IT incidents. Built with FastAPI and PostgreSQL on the backend and React.js on the frontend, it provides real-time updates, role-based user access, and a clean dashboard interface for efficient incident management.</p>
        <div className="tech-stack">
            <FaReact className="tech-icon react" title="React" />
            <FaPython className="tech-icon python" title="Python" />
            <FaDatabase className="tech-icon postgres" title="PostgreSQL" />
            <SiJavascript className="tech-icon js" title="JavaScript" />
            <SiFastapi className="tech-icon fp" title="FastAPI"/>
      
      
          </div>
      <a 
        href="https://github.com/eraldLeka/incident-management-app.git"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </div>

    <div className="project-card">
      <LazyImage src={pr2} alt="Weather Albania Map" className="project-img" />
      <h3>Weather Albania Map</h3>
      <p>An interactive web application that visualizes live weather conditions across Albania using a dynamic map interface. Developed with React.js and FastAPI, it integrates weather APIs to display real-time temperature, humidity, and forecasts, providing users with an intuitive and user-friendly experience.</p>
         <div className="tech-stack">
          <FaReact className="tech-icon react" title="React" />
          <FaPython className="tech-icon python" title="Python" />
          <SiJavascript className="tech-icon js" title="JavaScript" />
          <SiFastapi className="tech-icon fp" title="FastAPI"/>
      
          </div>
      <a 
        href="https://github.com/eraldLeka/Weather.git"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </div>
  </div>
</section>


    </div>
  );
}

export default Home;
