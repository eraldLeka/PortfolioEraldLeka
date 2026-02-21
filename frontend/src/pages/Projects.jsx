import React from "react";
import "../styles/Projects.css";
import { FaReact, FaPython, FaJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMysql, SiDocker, SiFastapi,SiPostgresql, SiR, SiDotnet,SiSharp} from "react-icons/si";
import { useState,useEffect } from "react";
import img1 from "../assets/diploma1.png";
import img2 from "../assets/diploma2.png";
import img3 from "../assets/diploma3.png";
import img4 from "../assets/calculator.png";
import tcpclient from "../assets/tcpclient.png";
import tcpserver from "../assets/tcpserver.png";

function Projects(){

    const images = [img1, img2,img3];
    const [ current, setCurrent ] = useState(0);

   useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, [images.length]);

const tcpImages = [tcpclient, tcpserver];
const [ tcpCurrent, setTcpCurrent ] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setTcpCurrent((prev) => (prev + 1) % tcpImages.length);
  }, 3000);
  return () => clearInterval(interval);
}, [tcpImages.length]);

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
            <p>A project for managing IT incidents.</p>
            <a 
            href="https://github.com/eraldLeka/incident-management-app.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            >
            <FaGithub /> View Project
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
             <p>A project for API communiacation.</p>
            <a 
            href="https://github.com/eraldLeka/Weather.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            >
            <FaGithub /> View Project
            </a>
  </div>

<div className="project-card project-card--calculator">
    <h3>Calculator</h3>
    <div className="gallery gallery--contain">
      <img src={img4} alt="Calculator App" className="project-img" />
    </div>
     <div className="tech-stack">
   
    <FaReact className="tech-icon react" title="React" />
    <SiJavascript className="tech-icon js" title="JavaScript" />
    <FaPython className="tech-icon python" title="Python" />

    </div>
         <p>A project for a pretty calculator.</p>
        <a 
        href="https://github.com/eraldLeka/Calculator.git" 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
        >
        <FaGithub  /> View Project
        </a>
  </div>
  <div className="project-card">
    <h3>TCP Server-Client</h3>
    <div className="gallery">
<img src={tcpImages[tcpCurrent]} alt="Project screenshot" />
    </div>
     <div className="tech-stack">
   
    <SiDotnet className="tech-icon dotnet" title=".NET"/>
    <SiSharp className="tech-icon sharp" title="C#"/>
    </div>
        <p>A TCP Server-Client desktop application.</p>
        <a 
        href="https://github.com/eraldLeka/TCP-Server-Client.git" 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
        >
        <FaGithub  /> View Project
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
        <p>A SVM model trained for classification.</p>
        <a 
        href="https://github.com/username/project-repo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
        >
        <FaGithub  /> View Project
        </a>
  </div>

  
</section>
            </div>
    );
}
export default Projects;
