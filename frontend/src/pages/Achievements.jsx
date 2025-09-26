import React from "react";
import "../styles/Achievements.css";
import freecodecamp from "../assets/freeCodeCamp.png";
import java from "../assets/java.jpg";
import data from "../assets/data.jpg";
import { 
  FaUser,
  FaLightbulb,
} from "react-icons/fa";




function About() {
  return (
    <div className="achieve-page">
      <section className="achieve-section">
        {/* Video në kolonën e majtë */}
        <div className="achieve-video-wrapper">
          <video autoPlay loop muted playsInline className="achieve-video">
            <source src="/videos/achieveVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="about-content">
          <h1>What I've Achieved?</h1>
        </div>
      </section>


<section className="certification">
  <h2 className="cert-title">My Certifications</h2>
  <div className="certification-grid">

        <div className="cert-card">
            <img src={freecodecamp} alt="FreeCodeCamp Certificate" className="cert-img" />
            <div className="cert-info">
                <p className="cert-name">FreeCodeCamp - Responsive Web Design</p>
                <p className="cert-date">Issued: June 2024</p>
            </div>
        </div>


        <div className="cert-card">
            <img src={java} alt="Java-Objected Oriented Programming" className="cert-img" />
            <div className="cert-info">
                <p className="cert-name">Java-Objected Oriented Programming</p>
                <p className="cert-date">Issued: August 2025</p>
            </div>
        </div>

        <div className="cert-card">
            <img src={data} alt="Data Science and AI" className="cert-img" />
            <div className="cert-info">
                <p className="cert-name">Data Science and AI</p>
                <p className="cert-date">Issued: May 2024</p>
            </div>
        </div>


  </div>
</section>





    </div>
  );
}

export default About;
