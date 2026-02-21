import React, { useState } from "react";
import "../styles/Achievements.css";
import freecodecamp from "../assets/freeCodeCamp.png";
import java from "../assets/java.jpg";
import data from "../assets/data.jpg";
import LazyVideo from "../components/LazyVideo.jsx";
import LazyImage from "../components/LazyImage.jsx";

function Achievements() {
  const [modalImg, setModalImg] = useState(null); // state për modal

  const certs = [
    { img: freecodecamp, name: "FreeCodeCamp - Responsive Web Design", date: "June 2024" },
    { img: java, name: "Java - Object Oriented Programming", date: "August 2025" },
    { img: data, name: "Data Science and AI", date: "May 2024" },
  ];

  const handleClick = (img) => {
    setModalImg(modalImg === img ? null : img); // toggle modal
  };

  return (
    <div className="achieve-page">
      <section className="achieve-section">
        <div className="achieve-video-wrapper">
          <LazyVideo
            src="/videos/achieveVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="achieve-video"
            rootMargin="600px"
          />
        </div>
        <div className="about-content">
          <h1>What I've Achieved?</h1>
        </div>
      </section>

      <section className="certification">
        <h2 className="cert-title">My Certifications</h2>
        <div className="certification-grid">
          {certs.map((cert, index) => (
            <div className="cert-card" key={index}>
              <LazyImage
                src={cert.img}
                alt={cert.name}
                className="cert-img"
                onClick={() => handleClick(cert.img)}
              />
              <div className="cert-info">
                <p className="cert-name">{cert.name}</p>
                <p className="cert-date">Issued: {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalImg && (
        <div className="modal-overlay" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Certification" className="modal-img" />
        </div>
      )}
    </div>
  );
}

export default Achievements;
