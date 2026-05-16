import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Technologies from "../components/Technologies.jsx";
import pr1 from "../assets/preventv2.png";
import conv1 from "../assets/conv1.png";
import heroPortrait from "../assets/image.png";
import LazyImage from "../components/LazyImage.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

function Home() {
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
    <div className="home page">
      <section className="hero">
        <div className="hero__grid">
          <div className="hero__left">
            <h1 className="hero__title hero-stagger" data-delay="0">
              Erald Leka
            </h1>
            <p className="hero__role hero-stagger" data-delay="150">
              Software Developer
            </p>
            <div className="btnRow hero-stagger" data-delay="300">
              <Link to="/projects" className="btn">
                Projects {"\u2193"}
              </Link>
              <a
                href="/EraldLekaCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                CV {"\u2197"}
              </a>
            </div>
          </div>

          <div className="hero__right heroPortraitFrame" aria-hidden="true">
            <img
              src={heroPortrait}
              alt=""
              className="heroPortraitFrame__img"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="hero__bottom">
          <div className="hero__rule" />
          <div className="hero__scroll">
            <span className="scroll-indicator" />
          </div>
        </div>
      </section>

      <Reveal as="section" className="section skills">
        <SectionHeading number="01" title="My Skills" />
        <Technologies />
      </Reveal>

      <Reveal as="section" className="section featured-projects">
        <SectionHeading number="02" title="New Projects" />
        <div className="projects-grid">
          <article className="project-card">
            <LazyImage
              src={pr1}
              alt="Estimate Management App"
              className="project-img project-img--contain zoomable"
              onClick={() => setModalImg(pr1)}
            />
            <div className="project-body">
              <h3>Estimate Management App</h3>
              <p>
                Full-stack quotation platform with React, FastAPI, and SQLite,
                emphasizing product management, bilingual PDF generation, secure
                authentication, and a clean, internationalized UI.
              </p>
            </div>
            <div className="tech-tags">
              <span className="tag">React</span>
              <span className="tag">FastAPI</span>
              <span className="tag">SQLite</span>
            </div>
            <a
              href="https://github.com/eraldLeka/estimate-web.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </article>

          <article className="project-card">
            <LazyImage
              src={conv1}
              alt="WebChat App"
              className="project-img project-img--contain zoomable"
              onClick={() => setModalImg(conv1)}
            />
            <div className="project-body">
              <h3>WebChat</h3>
              <p>
                Full-stack chat platform with React, FastAPI, and PostgreSQL,
                emphasizing conversation management, responsive layouts,
                real-time messaging, and a clean, modern UX.
              </p>
            </div>
            <div className="tech-tags">
              <span className="tag">React</span>
              <span className="tag">JavaScript</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">FastAPI</span>
            </div>
            <a
              href="https://github.com/eraldLeka/WebChat.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </article>
        </div>
      </Reveal>

      {modalImg && (
        <div className="image-modal-overlay" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Project preview" className="image-modal-img" />
        </div>
      )}
    </div>
  );
}

export default Home;

