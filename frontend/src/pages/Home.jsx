import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import homeVideoWebm from "../assets/homeVideo.webm";
import homeVideoMp4 from "../assets/homeVideo.mp4";
import Technologies from "../components/Technologies.jsx";
import pr1 from "../assets/preventv2.png";
import conv1 from "../assets/conv1.png";
import LazyVideo from "../components/LazyVideo.jsx";
import LazyImage from "../components/LazyImage.jsx";
import { FaReact, FaPython, FaJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMysql, SiDocker, SiFastapi,SiPostgresql, SiR } from "react-icons/si";

function Home() {
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

  return (
    <div className="home-container">
      <section className="hero-section"> {}
        <LazyVideo
          sources={[
            { src: homeVideoMp4, type: "video/mp4" },
          ]}
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
      <LazyImage
        src={pr1}
        alt="Estimate Management App"
        className="project-img project-img--contain zoomable"
        onClick={() => setModalImg(pr1)}
      />
      <h3>Estimate Management App</h3>
      <p>Full-stack quotation platform with React, FastAPI, and SQLite, emphasizing product management, bilingual PDF generation, secure authentication, and a clean, internationalized UI.</p>
        <div className="tech-stack">
            <FaReact className="tech-icon react" title="React" />
            <FaPython className="tech-icon python" title="Python" />
            <FaDatabase className="tech-icon SQLite" title="SQLite" />
          </div>
      <a 
        href="https://github.com/eraldLeka/estimate-web.git"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </div>

    <div className="project-card">
      <LazyImage
        src={conv1}
        alt="WebChat App"
        className="project-img project-img--contain zoomable"
        onClick={() => setModalImg(conv1)}
      />
      <h3>WebChat</h3>
      <p>Full-stack chat platform with React, FastAPI, and PostgreSQL, emphasizing conversation management, responsive layouts, real-time messaging, and a clean, modern UX.</p>
        <div className="tech-stack">
            <FaReact className="tech-icon react" title="React" />
            <SiJavascript className="tech-icon js" title="JavaScript" />
            <SiPostgresql className="tech-icon postgres" title="PostgreSQL" />
            <SiFastapi className="tech-icon fp" title="FastAPI"/>
          </div>
      <a 
        href="https://github.com/eraldLeka/WebChat.git"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </div>

   
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

export default Home;
