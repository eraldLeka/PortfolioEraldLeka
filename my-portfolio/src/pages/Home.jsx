import React, { useRef } from "react";
import "../styles/home.css";
import "../styles/homeResponsive.css";

import profilePic from "../assets/erald.png";

import useReveal from "../assets/hooks/useReveal";

import { FaDownload } from "react-icons/fa";
import aivideo from "../assets/aivideo.mp4";

import ExpandableText from "../components/ExpandableText";
import { FaGithub } from "react-icons/fa";



const Home = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useReveal(aboutRef);
  useReveal(projectsRef);
  useReveal(skillsRef);
  useReveal(contactRef);

  return (
    <>
      {/* About Section */}
      <section className="about" id="about" ref={aboutRef}>
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">
              Erald Leka
            </h1>
            <p className="about-subtitle">
              I'm a Web Developer dedicated to delivering efficient, user-centric frontend experiences alongside reliable and maintainable backend solutions. I specialize in solving real-world problems using modern technologies, ensuring applications perform seamlessly from the server to the user interface.
            </p>
            <a
              href="/EraldLekaCV.pdf" 
              download
              className="resume-download-button"
            >
              <FaDownload style={{ marginRight: "8px" }} />
              CV
            </a>
          </div>

          <div className="about-image">
            <img src={profilePic} alt="Erald" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects" ref={projectsRef}>
        <h2>Projects</h2>
        <p>Here are some of my featured works.</p>

        <div className="projects-grid">
          {/* Project 1 */}
              <div className="project-card">
                <video src="/videos/WeatherApp.mp4" controls />
                <h3>Weather App</h3>
                <ExpandableText text="Weather App is a web application built with React.js and Flask that allows users to search for real-time weather conditions in any city. It integrates with an external weather API to display temperature, humidity, wind, and dynamic icons that change based on weather conditions. The app follows professional practices such as using environment variables for API keys, enabling secure frontend–backend communication with CORS, and applying responsive design to ensure a smooth experience across devices." />

              {/* Butoni GitHub me ikonë */}
              <a 
                href="https://github.com/eraldLeka/Weather.git" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-button"
              >
                <FaGithub style={{ marginRight: "8px" }} />
                View on GitHub
              </a>


          <div className="technologies">
        <span className="tech react">
              <img src="/icons/react.svg" alt="React" /> React
            </span>
            <span className="tech fastapi">
              <img src="/icons/fastapi.svg" alt="FastAPI" /> FastAPI
            </span>
            <span className="tech flask">
              <img src="/icons/flask.svg" alt="Flask" /> Flask
            </span>
            <span className="tech javascript">
              <img src="/icons/javascript.svg" alt="JavaScript" /> JavaScript
            </span>
          </div>
        </div>


          {/* Project 2 */}
          <div className="project-card">
            <video src="/videos/IncidentManagment.mp4" controls />
            <h3>IT incidentManagment</h3>
          <ExpandableText text="IT Incident Management is a web application designed to streamline the process of reporting, tracking, and resolving IT incidents within an organization. Built with a React.js frontend and a Flask backend, the application features user authentication, role-based access control, and a RESTful API for efficient data handling. Users can submit incident reports, view their status, and communicate with IT support staff through integrated comments. The system also includes an admin dashboard for managin" />
        {/* Butoni GitHub me ikonë */}
        <a 
          href="https://github.com/eraldLeka/incident-management-app.git" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="github-button"
        >
          <FaGithub style={{ marginRight: "8px" }} />
          View on GitHub
        </a>
              {/* Teknologjitë */}
  <div className="technologies">
    <span className="tech react">
      <img src="/icons/react.svg" alt="React" /> React
    </span>
    <span className="tech fastapi">
      <img src="/icons/fastapi.svg" alt="FastAPI" /> FastAPI
    </span>
    <span className="tech flask">
      <img src="/icons/flask.svg" alt="Flask" /> Flask
    </span>
    <span className="tech javascript">
      <img src="/icons/javascript.svg" alt="JavaScript" /> JavaScript
    </span>
    <span className="tech postgre">
      <img src="/icons/postgresql.svg" alt="PostgreSQL" /> PostgreSQL
    </span>
    <span className="tech git">
      <img src="/icons/git.svg" alt="Git" /> Git & GitHub
    </span>
  </div>
          </div>

          
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills" ref={skillsRef}>
        <h2>My Skills</h2>

        <div className="skills-container">
          {/* Video */}
          <div className="skill-video">
  <video 
    src={aivideo} 
    autoPlay 
    muted 
    loop 
    playsInline 
  />
</div>


          {/* List of skills */}
<div className="skill-list fade-in">
  <span className="tech html"><img src="/icons/html5.svg" alt="HTML5" /> HTML5</span>
  <span className="tech css"><img src="/icons/css.svg" alt="CSS" /> CSS</span>
  <span className="tech python"><img src="/icons/python.svg" alt="Python" /> Python</span>
  <span className="tech javascript"><img src="/icons/javascript.svg" alt="JavaScript" /> JavaScript</span>
  <span className="tech react"><img src="/icons/react.svg" alt="React" /> React.js</span>
  <span className="tech fastapi"><img src="/icons/fastapi.svg" alt="FastAPI" /> FastAPI</span>
  <span className="tech restapi"><img src="/icons/restapi.svg" alt="RestAPI" /> RestfulAPI</span>
  <span className="tech flask"><img src="/icons/flask.svg" alt="Flask" />Flask</span>
  <span className="tech git"><img src="/icons/git.svg" alt="Git" />Git</span>
  <span className="tech git"><img src="/icons/github.svg" alt="Git" />GitHub</span>
  <span className="tech jinja"><img src="/icons/jinja.svg" alt="Jinja" />Jinja</span>



  <span className="tech postgre"><img src="/icons/postgresql.svg" alt="PostgreSQL" /> PostgreSQL</span>
  <span className="tech mysql"><img src="/icons/mysql.svg" alt="MySQL" /> MySQL</span>



</div>


        </div>
      </section>

<section className="contact" id="contact" ref={contactRef}>
  <h2>Contact Me</h2>
  <ul className="contact-list">
    <li>
      <a href="mailto:lekaerald2@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-button email">
        <img src="/icons/gmail.svg" alt="Email" className="contact-icon" />
        Email
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/erald-leka-793742253" target="_blank" rel="noopener noreferrer" className="contact-button linkedin">
        <img src="/icons/linkedin.svg" alt="LinkedIn" className="contact-icon" />
        LinkedIn
      </a>
    </li>
    <li>
      <a href="https://wa.me/355692218305" target="_blank" rel="noopener noreferrer" className="contact-button whatsapp">
        <img src="/icons/whatsapp.svg" alt="WhatsApp" className="contact-icon" />
        WhatsApp
      </a>
    </li>
    <li>
      <a href="https://github.com/eraldLeka" target="_blank" rel="noopener noreferrer" className="contact-button github">
        <img src="/icons/github.svg" alt="GitHub" className="contact-icon" />
        GitHub
      </a>
    </li>
  </ul>
</section>


    </>
  );
};

export default Home;
