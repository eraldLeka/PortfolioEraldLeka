import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/Achievements.css";
import freecodecamp from "../assets/freeCodeCamp.png";
import java from "../assets/java.jpg";
import data from "../assets/data.jpg";
import LazyImage from "../components/LazyImage.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import oracle from "../assets/oracle.png";

function Achievements() {
  const shouldReduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [modalImg, setModalImg] = useState(null); // state pÃ«r modal

  useEffect(() => {
    if (!modalImg) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setModalImg(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalImg]);

  const certs = [
    { img: freecodecamp, name: "FreeCodeCamp - Responsive Web Design", date: "June 2024" },
    { img: oracle, name: "Oracle: Database for Developers(Foundations)", date: "May 2026"},
    { img: java, name: "Java - Object Oriented Programming", date: "August 2025" },
    { img: data, name: "Data Science and AI", date: "May 2024" },
    
  ];

  const handleClick = (img) => {
    setModalImg(modalImg === img ? null : img); 
  };

  const MotionOverlay = motion.div;
  const MotionImage = motion.img;

  return (
    <div className="achievements page">
      <SectionHeading number="01" title="What I've Achieved?" as="h1" />

      <Reveal as="section" className="section certification">
        <div className="certification-grid">
          {certs.map((cert, index) => (
            <article className="cert-card" key={index}>
              <LazyImage
                src={cert.img}
                alt={cert.name}
                className="cert-img zoomable"
                onClick={() => handleClick(cert.img)}
              />
              <div className="cert-info">
                <p className="cert-name">{cert.name}</p>
                <p className="cert-date">Issued: {cert.date}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <AnimatePresence>
        {modalImg && (
          <MotionOverlay
            className="image-modal-overlay"
            onClick={() => setModalImg(null)}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
          >
            <MotionImage
              src={modalImg}
              alt="Certification"
              className="image-modal-img"
              onClick={(event) => event.stopPropagation()}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
              }
              exit={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }
              }
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.22, ease: "easeOut" }}
            />
          </MotionOverlay>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Achievements;
