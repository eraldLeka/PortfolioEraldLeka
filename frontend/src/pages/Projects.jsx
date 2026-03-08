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
import compress from "../assets/compress.png";
import conv1 from "../assets/conv1.png";
import chatwindow1 from "../assets/chatwindow1.png";
import changes1 from "../assets/changes1.png";
import login from "../assets/login.png";
import LazyVideo from "../components/LazyVideo.jsx";
import LazyImage from "../components/LazyImage.jsx";

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

const webchatImages = [conv1, chatwindow1, changes1, login];
const [ webchatCurrent, setWebchatCurrent ] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setWebchatCurrent((prev) => (prev + 1) % webchatImages.length);
  }, 3000);
  return () => clearInterval(interval);
}, [webchatImages.length]);

const [modalImg, setModalImg] = useState(null);

useEffect(() => {
  if (!modalImg) return;
  const handleKey = (event) => {
    if (event.key === "Escape") {
      setModalImg(null);
    }
  };
  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [modalImg]);

    return(   

            <div className="projects-page">
            <section className="projects-section">
                {/* Video në kolonën e majtë */}
                <div className="projects-video-wrapper">
                <LazyVideo
                    src="/videos/projectVideo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="projects-video"
                    rootMargin="600px"
                >
                    Your browser does not support the video tag.
                </LazyVideo>
                </div>

                <div className="projects-content">
                <h1>What I've Built?</h1>
                </div>
            </section>

<section className="projects-file">
  <div className="project-card">
    <h3>WebChat</h3>
    <div className="gallery gallery--contain">
      <LazyImage
        src={webchatImages[webchatCurrent]}
        alt="WebChat app preview"
        className="zoomable"
        onClick={() => setModalImg(webchatImages[webchatCurrent])}
      />
    </div>
     <div className="tech-stack">
      <FaReact className="tech-icon react" title="React" />
      <SiJavascript className="tech-icon js" title="JavaScript" />
      <SiPostgresql className="tech-icon postgres" title="PostgreSQL" />
      <SiFastapi className="tech-icon fp" title="FastAPI"/>
    </div>
        <p>Full-stack chat platform with React, FastAPI, and PostgreSQL, emphasizing conversation management, responsive layouts, real-time messaging, and a clean, modern UX.</p>
        <a 
        href="https://github.com/eraldLeka/WebChat.git" 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
        >
        <FaGithub  /> View Project
        </a>
  </div>

  <div className="project-card">
    <h3>TCP Server-Client</h3>
    <div className="gallery gallery--contain">
<LazyImage
  src={tcpImages[tcpCurrent]}
  alt="Project screenshot"
  className="zoomable"
  onClick={() => setModalImg(tcpImages[tcpCurrent])}
/>
    </div>
     <div className="tech-stack">
   
    <SiDotnet className="tech-icon dotnet" title=".NET"/>
    <SiSharp className="tech-icon sharp" title="C#"/>
    </div>
        <p>C#/.NET desktop app implementing TCP sockets with structured messaging, resilient reconnection, detailed client/server logging, monitoring tools, and robust error handling.</p>
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
    <h3> IT Incident Management</h3>
    <LazyVideo
        sources={[
          { src: "/videos/IncidentManagment.webm", type: "video/webm" },
          { src: "/videos/IncidentManagment.mp4", type: "video/mp4" },
        ]}
        autoPlay
        loop
        muted
        controls
        playsInline
        preload="metadata"
        className="projectVideo"
        rootMargin="400px"
    >
        Your browser does not support the video tag.
    </LazyVideo>
     <div className="tech-stack">
      <FaReact className="tech-icon react" title="React" />
      <FaPython className="tech-icon python" title="Python" />
      <FaDatabase className="tech-icon postgres" title="PostgreSQL" />
      <SiJavascript className="tech-icon js" title="JavaScript" />
      <SiFastapi className="tech-icon fp" title="FastAPI"/>


    </div>
            <p>Incident management system for reporting, tracking, and resolving IT issues with role-based access, real-time updates, workflow dashboards, auditing, and analytics.</p>
            <a 
            href="https://github.com/eraldLeka/incident-management-app.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            >
            <FaGithub /> View Project
            </a>
  </div>

<div className="project-card project-card--calculator">
    <h3>Compress-Decompress</h3>
    <div className="gallery gallery--contain">
      <LazyImage
        src={compress}
        alt="Compress-Decompress App"
        className="project-img zoomable"
        onClick={() => setModalImg(compress)}
      />
    </div>
     <div className="tech-stack">
 <SiDotnet className="tech-icon dotnet" title=".NET"/>
    <SiSharp className="tech-icon sharp" title="C#"/>   

    </div>
         <p>Desktop utility for file compression and extraction with streamlined workflows, integrity checks, progress feedback, and status reporting for reliable results.</p>
        <a 
        href="https://github.com/eraldLeka/Compress-Decompress-Project.git" 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
        >
        <FaGithub  /> View Project
        </a>
  </div>
  
<div className="project-card">
    <h3>Weather Albania Map App</h3>
    <LazyVideo
        src="/videos/WeatherApp.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="projectVideo"
        rootMargin="400px"
    >
        Your browser does not support the video tag.
    </LazyVideo>
    <div className="tech-stack">
    <FaReact className="tech-icon react" title="React" />
    <FaPython className="tech-icon python" title="Python" />
    <SiJavascript className="tech-icon js" title="JavaScript" />
    <SiFastapi className="tech-icon fp" title="FastAPI"/>

    </div>
            <p>Interactive weather map for Albania with API-driven data, fast rendering, responsive UI, location-based insights, and clear visual daily trends summaries.</p>
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
      <LazyImage
        src={img4}
        alt="Calculator App"
        className="project-img zoomable"
        onClick={() => setModalImg(img4)}
      />
    </div>
     <div className="tech-stack">
   
    <FaReact className="tech-icon react" title="React" />
    <SiJavascript className="tech-icon js" title="JavaScript" />
    <FaPython className="tech-icon python" title="Python" />

    </div>
         <p>Clean, responsive calculator interface with accurate input handling, keyboard-friendly controls, consistent spacing, clear error states, and smooth interactions, polished visuals.</p>
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
    <h3>SVM Model for Classification</h3>
    <div className="gallery">
<LazyImage
  src={images[current]}
  alt="Project screenshot"
  className="zoomable"
  onClick={() => setModalImg(images[current])}
/>
    </div>
     <div className="tech-stack">
   
    <SiR className="tech-icon r" title="R"/>

    </div>
        <p>Machine learning project implementing SVM classification with feature preprocessing, model tuning, validation splits, balanced metrics, and clear performance evaluation reports.</p>
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
            {modalImg && (
              <div className="image-modal-overlay" onClick={() => setModalImg(null)}>
                <img src={modalImg} alt="Project preview" className="image-modal-img" />
              </div>
            )}
            </div>
    );
}
export default Projects;
