import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";
import LazyImage from "../components/LazyImage.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

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
import preventiv1 from "../assets/preventv1.png";
import preventiv2 from "../assets/preventv2.png";
import preventiv3 from "../assets/preventv3.png";
import preventiv4 from "../assets/preventv4.png";
import preventiv5 from "../assets/preventv5.png";
import preventiv6 from "../assets/preventv6.png";
import incident from "../assets/incident.png";
import weather from "../assets/weather.png";

function Projects() {
  const images = [img1, img2, img3];
  const preventiveImages = [
    preventiv2,
    preventiv5,
    preventiv3,
    preventiv4,
    preventiv1,
    preventiv6,
  ];
  const tcpImages = [tcpclient, tcpserver];
  const webchatImages = [conv1, chatwindow1, changes1, login];

  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    if (!modalImg) return;
    const handleKey = (event) => {
      if (event.key === "Escape") setModalImg(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalImg]);

  return (
    <div className="projects page">
      <SectionHeading number="01" title="What I've Built?" as="h1" />

      <Reveal as="section" className="section projectsGrid">
        <article className="projectCard">
          <header className="projectCard__top">
            <h3 className="projectCard__title">Estimate Management Web</h3>
            <a
              href="https://github.com/eraldLeka/estimate-web.git"
              target="_blank"
              rel="noopener noreferrer"
              className="projectCard__iconBtn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </header>

          <div className="projectCard__media">
            <LazyImage
              src={preventiveImages[0]}
              alt="Estimate app preview"
              className="projectCard__img zoomable"
              onClick={() => setModalImg(preventiveImages[0])}
            />
          </div>

          <p className="projectCard__desc">
            Developed a FastAPI and React application for managing products and
            generating automated bilingual (SQ/EN) PDF quotes. Features include
            JWT authentication, RESTful APIs, and multi-language support (i18n)
          </p>

          <div className="projectCard__tags">
            <span className="tag">React</span>
            <span className="tag">JavaScript</span>
            <span className="tag">SQLite</span>
            <span className="tag">FastAPI</span>
          </div>

          <a
            href="https://github.com/eraldLeka/estimate-web.git"
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard__cta"
          >
            View Project
          </a>
        </article>

        <article className="projectCard">
          <header className="projectCard__top">
            <h3 className="projectCard__title">WebChat</h3>
            <a
              href="https://github.com/eraldLeka/WebChat.git"
              target="_blank"
              rel="noopener noreferrer"
              className="projectCard__iconBtn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </header>

          <div className="projectCard__media">
            <LazyImage
              src={webchatImages[0]}
              alt="WebChat app preview"
              className="projectCard__img zoomable"
              onClick={() => setModalImg(webchatImages[0])}
            />
          </div>

          <p className="projectCard__desc">
            Full-stack chat platform with React, FastAPI, and PostgreSQL,
            emphasizing conversation management, responsive layouts, real-time
            messaging, and a clean, modern UX.
          </p>

          <div className="projectCard__tags">
            <span className="tag">React</span>
            <span className="tag">JavaScript</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">FastAPI</span>
          </div>

          <a
            href="https://github.com/eraldLeka/WebChat.git"
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard__cta"
          >
            View Project
          </a>
        </article>

        <article className="projectCard">
          <header className="projectCard__top">
            <h3 className="projectCard__title">TCP Server-Client</h3>
            <a
              href="https://github.com/eraldLeka/TCP-Server-Client.git"
              target="_blank"
              rel="noopener noreferrer"
              className="projectCard__iconBtn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </header>

          <div className="projectCard__media">
            <LazyImage
              src={tcpImages[0]}
              alt="Project screenshot"
              className="projectCard__img zoomable"
              onClick={() => setModalImg(tcpImages[0])}
            />
          </div>

          <p className="projectCard__desc">
            C#/.NET desktop app implementing TCP sockets with structured
            messaging, resilient reconnection, detailed client/server logging,
            monitoring tools, and robust error handling.
          </p>

          <div className="projectCard__tags">
            <span className="tag">.NET</span>
            <span className="tag">C#</span>
          </div>

          <a
            href="https://github.com/eraldLeka/TCP-Server-Client.git"
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard__cta"
          >
            View Project
          </a>
        </article>

        <article className="projectCard">
          <header className="projectCard__top">
            <h3 className="projectCard__title">IT Incident Management</h3>
            <a
              href="https://github.com/eraldLeka/incident-management-app.git"
              target="_blank"
              rel="noopener noreferrer"
              className="projectCard__iconBtn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </header>
          <div className="projectCard__media">
            <LazyImage
              src={incident}
              alt="Incident Management App"
              className="projectCard__img zoomable"
              onClick={() => setModalImg(incident)}
            />
          </div>

          <p className="projectCard__desc">
            Incident management system for reporting, tracking, and resolving IT
            issues with role-based access, real-time updates, workflow
            dashboards, auditing, and analytics.
          </p>

          <div className="projectCard__tags">
            <span className="tag">React</span>
            <span className="tag">Python</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">JavaScript</span>
            <span className="tag">FastAPI</span>
          </div>

          <a
            href="https://github.com/eraldLeka/incident-management-app.git"
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard__cta"
          >
            View Project
          </a>
        </article>

        <article className="projectCard">
          <header className="projectCard__top">
            <h3 className="projectCard__title">Compress-Decompress</h3>
            <a
              href="https://github.com/eraldLeka/Compress-Decompress-Project.git"
              target="_blank"
              rel="noopener noreferrer"
              className="projectCard__iconBtn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </header>

          <div className="projectCard__media">
            <LazyImage
              src={compress}
              alt="Compress-Decompress App"
              className="projectCard__img zoomable"
              onClick={() => setModalImg(compress)}
            />
          </div>

          <p className="projectCard__desc">
            Desktop utility for file compression and extraction with streamlined
            workflows, integrity checks, progress feedback, and status reporting
            for reliable results.
          </p>

          <div className="projectCard__tags">
            <span className="tag">.NET</span>
            <span className="tag">C#</span>
          </div>

          <a
            href="https://github.com/eraldLeka/Compress-Decompress-Project.git"
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard__cta"
          >
            View Project
          </a>
        </article>

        <article className="projectCard">
          <header className="projectCard__top">
            <h3 className="projectCard__title">Weather Albania Map App</h3>
            <a
              href="https://github.com/eraldLeka/Weather.git"
              target="_blank"
              rel="noopener noreferrer"
              className="projectCard__iconBtn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </header>
          <div className="projectCard__media">
            <LazyImage
              src={weather}
              alt="Weather"
              className="projectCard__img zoomable"
              onClick={() => setModalImg(weather)}
            />
          </div>

          <p className="projectCard__desc">
            Interactive weather map for Albania with API-driven data, fast
            rendering, responsive UI, location-based insights, and clear visual
            daily trends summaries.
          </p>

          <div className="projectCard__tags">
            <span className="tag">React</span>
            <span className="tag">Python</span>
            <span className="tag">JavaScript</span>
            <span className="tag">FastAPI</span>
          </div>

          <a
            href="https://github.com/eraldLeka/Weather.git"
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard__cta"
          >
            View Project
          </a>
        </article>

        <article className="projectCard">
          <header className="projectCard__top">
            <h3 className="projectCard__title">Calculator</h3>
            <a
              href="https://github.com/eraldLeka/Calculator.git"
              target="_blank"
              rel="noopener noreferrer"
              className="projectCard__iconBtn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </header>

          <div className="projectCard__media">
            <LazyImage
              src={img4}
              alt="Calculator App"
              className="projectCard__img zoomable"
              onClick={() => setModalImg(img4)}
            />
          </div>

          <p className="projectCard__desc">
            Clean, responsive calculator interface with accurate input handling,
            keyboard-friendly controls, consistent spacing, clear error states,
            and smooth interactions, polished visuals.
          </p>

          <div className="projectCard__tags">
            <span className="tag">React</span>
            <span className="tag">JavaScript</span>
            <span className="tag">Python</span>
          </div>

          <a
            href="https://github.com/eraldLeka/Calculator.git"
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard__cta"
          >
            View Project
          </a>
        </article>

        <article className="projectCard">
          <header className="projectCard__top">
            <h3 className="projectCard__title">SVM Model for Classification</h3>
            <a
              href="https://github.com/username/project-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="projectCard__iconBtn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </header>

          <div className="projectCard__media">
            <LazyImage
              src={images[0]}
              alt="Project screenshot"
              className="projectCard__img zoomable"
              onClick={() => setModalImg(images[0])}
            />
          </div>

          <p className="projectCard__desc">
            Machine learning project implementing SVM classification with
            feature preprocessing, model tuning, validation splits, balanced
            metrics, and clear performance evaluation reports.
          </p>

          <div className="projectCard__tags">
            <span className="tag">R</span>
          </div>

          <a
            href="https://github.com/username/project-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard__cta"
          >
            View Project
          </a>
        </article>
      </Reveal>

      {modalImg && (
        <div className="image-modal-overlay" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Project preview" className="image-modal-img" />
        </div>
      )}
    </div>
  );
}

export default Projects;

