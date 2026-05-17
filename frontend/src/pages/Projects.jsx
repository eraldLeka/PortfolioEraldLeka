import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";
import LazyImage from "../components/LazyImage.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

import img1 from "../assets/diploma1.png";
import img4 from "../assets/calculator.png";
import tcpclient from "../assets/tcpclient.png";
import compress from "../assets/compress.png";
import conv1 from "../assets/conv1.png";
import preventiv2 from "../assets/preventv2.png";
import incident from "../assets/incident.png";
import weather from "../assets/weather.png";

function Projects() {
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    if (!modalImg) return;
    const handleKey = (event) => {
      if (event.key === "Escape") setModalImg(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalImg]);

  const projects = [
    {
      title: "Estimate Management Web",
      href: "https://github.com/eraldLeka/estimate-web.git",
      img: preventiv2,
      alt: "Estimate app preview",
      desc: "Developed a FastAPI and React application for managing products and generating automated bilingual (SQ/EN) PDF quotes. Features include JWT authentication, RESTful APIs, and multi-language support (i18n)",
      tags: ["React", "JavaScript", "SQLite", "FastAPI"],
    },
    {
      title: "WebChat",
      href: "https://github.com/eraldLeka/WebChat.git",
      img: conv1,
      alt: "WebChat app preview",
      desc: "Full-stack chat platform with React, FastAPI, and PostgreSQL, emphasizing conversation management, responsive layouts, real-time messaging, and a clean, modern UX.",
      tags: ["React", "JavaScript", "PostgreSQL", "FastAPI"],
    },
    {
      title: "TCP Server-Client",
      href: "https://github.com/eraldLeka/TCP-Server-Client.git",
      img: tcpclient,
      alt: "TCP client/server preview",
      desc: "C#/.NET desktop app implementing TCP sockets with structured messaging, resilient reconnection, detailed client/server logging, monitoring tools, and robust error handling.",
      tags: [".NET", "C#"],
    },
    {
      title: "IT Incident Management",
      href: "https://github.com/eraldLeka/incident-management-app.git",
      img: incident,
      alt: "Incident Management App",
      desc: "Incident management system for reporting, tracking, and resolving IT issues with role-based access, real-time updates, workflow dashboards, auditing, and analytics.",
      tags: ["React", "Python", "PostgreSQL", "JavaScript", "FastAPI"],
    },
    {
      title: "Compress-Decompress",
      href: "https://github.com/eraldLeka/Compress-Decompress-Project.git",
      img: compress,
      alt: "Compress-Decompress App",
      desc: "Desktop utility for file compression and extraction with streamlined workflows, integrity checks, progress feedback, and status reporting for reliable results.",
      tags: [".NET", "C#"],
    },
    {
      title: "Weather Albania Map App",
      href: "https://github.com/eraldLeka/Weather.git",
      img: weather,
      alt: "Weather",
      desc: "Interactive weather map for Albania with API-driven data, fast rendering, responsive UI, location-based insights, and clear visual daily trends summaries.",
      tags: ["React", "Python", "JavaScript", "FastAPI"],
    },
    {
      title: "Calculator",
      href: "https://github.com/eraldLeka/Calculator.git",
      img: img4,
      alt: "Calculator App",
      desc: "Clean, responsive calculator interface with accurate input handling, keyboard-friendly controls, consistent spacing, clear error states, and smooth interactions, polished visuals.",
      tags: ["React", "JavaScript", "Python"],
    },
    {
      title: "SVM Model for Classification",
      href: "https://github.com/username/project-repo",
      img: img1,
      alt: "SVM project screenshot",
      desc: "Machine learning project implementing SVM classification with feature preprocessing, model tuning, validation splits, balanced metrics, and clear performance evaluation reports.",
      tags: ["R"],
    },
  ];

  const groups = [];
  for (let i = 0; i < projects.length; i += 2) {
    groups.push(projects.slice(i, i + 2));
  }

  const renderProjectCard = (project) => (
    <article key={project.title} className="projectCard">
      <header className="projectCard__top">
        <h3 className="projectCard__title">{project.title}</h3>
        <a
          href={project.href}
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
          src={project.img}
          alt={project.alt}
          className="projectCard__img zoomable"
          onClick={() => setModalImg(project.img)}
        />
      </div>

      <p className="projectCard__desc">{project.desc}</p>

      <div className="projectCard__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="projectCard__cta"
      >
        View Project
      </a>
    </article>
  );

  return (
    <div className="projects page">
      <SectionHeading number="01" title="What I've Built?" as="h1" />

      <div className="projects__list">
        <section className="projectsGrid projectsGrid--first">
          {groups[0].map(renderProjectCard)}
        </section>

        {groups.slice(1).map((group) => (
          <Reveal
            key={group[0]?.title ?? "projects-group"}
            as="section"
            className="projectsGrid projectsGrid--reveal"
          >
            {group.map(renderProjectCard)}
          </Reveal>
        ))}
      </div>

      {modalImg && (
        <div className="image-modal-overlay" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Project preview" className="image-modal-img" />
        </div>
      )}
    </div>
  );
}

export default Projects;
