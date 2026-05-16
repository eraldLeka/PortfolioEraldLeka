import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

function Contact() {
  return (
    <div className="contact page">
      <SectionHeading number="01" title="Get in Touch?" as="h1" />
      <Reveal as="section" className="section contact-info">
        <div className="contact-grid">
          <a
            href="mailto:youremail@example.com"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="contact-icon" />
            <p>Email</p>
            <span>lekaerald2@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/erald-leka-793742253"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact-icon" />
            <p>LinkedIn</p>
            <span>Erald Leka</span>
          </a>

          <a
            href="https://github.com/eraldLeka"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" />
            <p>GitHub</p>
            <span>eraldLeka</span>
          </a>

          <a
            href="https://wa.me/355692218305"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="contact-icon" />
            <p>WhatsApp</p>
            <span>+355 69 22 18 305</span>
          </a>
        </div>
      </Reveal>

      <footer className="footer">
        <div className="footer__inner">
          <a
            href="mailto:youremail@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            lekaerald2@gmail.com
          </a>
          <div className="footer__icons">
            <a
              href="https://github.com/eraldLeka"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/erald-leka-793742253"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;

