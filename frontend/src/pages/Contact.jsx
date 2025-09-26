import React from "react";
import "../styles/Contact.css";


import { 
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";




function About() {
  return (
    <div className="contact-page">
      <section className="contact-section">
        {/* Video në kolonën e majtë */}
        <div className="contact-video-wrapper">
          <video autoPlay loop muted playsInline className="contact-video">
            <source src="/videos/contactVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="contact-content">
          <h1>Get in Touch?</h1>
        </div>
      </section>


<section className="contact-info">
  <h2 className="contact-title">Contact Me</h2>
  <div className="contact-grid">
    <a href="mailto:youremail@example.com" className="contact-card" target="_blank" rel="noopener noreferrer">
      <FaEnvelope className="contact-icon" color= "#f17272ff" />
      <p>Email</p>
      <span>lekaerald2@gmail.com</span>
    </a>

    <a href="https://www.linkedin.com/in/erald-leka-793742253" className="contact-card" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="contact-icon" color= "#1379bdff"/>
      <p>LinkedIn</p>
      <span>Erald Leka</span>
    </a>

    <a href="https://github.com/eraldLeka" className="contact-card" target="_blank" rel="noopener noreferrer">
      <FaGithub className="contact-icon" />
      <p>GitHub</p>
      <span>eraldLeka</span>
    </a>

    <a href="https://wa.me/yourphonenumber" className="contact-card" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="contact-icon" color= "#33ae48ff"  />
      <p>WhatsApp</p>
      <span>+355 69 22 18 305</span>
    </a>
  </div>
</section>


    </div>
  );
}

export default About;
