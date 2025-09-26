import React from "react";
import "../styles/Projects.css";
import { FaReact, FaPython, FaJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMysql, SiDocker, SiFastapi,SiPostgresql, SiR } from "react-icons/si";
import { useState,useEffect } from "react";
import img1 from "../assets/diploma1.png";
import img2 from "../assets/diploma2.png";
import img3 from "../assets/diploma3.png";

function Projects(){

    const images = [img1, img2, img3];
    const [ current, setCurrent ] = useState(0);

   useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, [images.length]);



    return(   

            <div className="projects-page">
            <section className="projects-section">
                {/* Video në kolonën e majtë */}
                <div className="projects-video-wrapper">
                <video autoPlay loop muted playsInline className="projects-video">
                    <source src="/videos/projectVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>

                <div className="projects-content">
                <h1>What I've Built?</h1>
                </div>
            </section>

<section className="projects-file">
  <div className="project-card">
    <h3> IT Incident Management</h3>
    <video autoPlay loop muted controls playsInline className="projectVideo">
        <source src="/videos/IncidentManagment.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
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
            <FaGithub color="black" /> View Project
            </a>
  </div>

  <div className="project-card">
    <h3>Weather Albania Map App</h3>
    <video autoPlay loop muted controls playsInline className="projectVideo">
        <source src="/videos/WeatherApp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
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
            <FaGithub color="black" /> View Project
            </a>
  </div>

  <div className="project-card">
    <h3>SVM Model for Classification</h3>
    <div className="gallery">
<img src={images[current]} alt="Project screenshot" />
    </div>
     <div className="tech-stack">
   
    <SiR className="tech-icon r" title="R"/>

    </div>
        <a 
        href="https://github.com/username/project-repo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
        >
        <FaGithub color="black" /> View Project
        </a>
  </div>
</section>
            </div>
    );
}
export default Projects;