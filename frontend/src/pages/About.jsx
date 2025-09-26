import React from "react";
import "../styles/About.css";
import { 
  FaUser,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaCode,
  FaGlobe,
  FaDatabase,
  FaPython,
  FaServer,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import { AiOutlinePushpin } from "react-icons/ai";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import university from "../assets/university.png"; 
import education from "../assets/education.jpeg";
import ExpertSection from "../components/ExpertSection";



function About() {
  return (
    <div className="about-page">
      <section className="about-section">
        {/* Video në kolonën e majtë */}
        <div className="about-video-wrapper">
          <video autoPlay loop muted playsInline className="about-video">
            <source src="/videos/aboutIntro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="about-content">
          <h1>Who Am I?</h1>
        </div>
      </section>

      <section className="personal-content">
        <div className="personal-bio">
      <p >
        <AiOutlinePushpin color="red"/>
        I am a passionate IT graduate with a strong interest in web development and modern technologies. I enjoy building clean and efficient applications, solving challenging problems, and continuously learning to improve my skills. My goal is to contribute to impactful projects while growing as a developer.
      </p>
        </div>
      </section>
      
    <section className="expert-section">
  <h2>What Can I Do?</h2>
  <ExpertSection />
</section>

      <section className="education">
        <h3>
          <FaGraduationCap 
            color="black" 
            style={{ marginRight: "6px", verticalAlign: "middle" }} 
          />
          Education
        </h3>

        <div className="university-wrapper">
          <img src={university} alt="University" className="university" />

          <div className="university-info">
            <h4>BSc in Information Technologies</h4>
            <p>UNIEL - University of Elbasan, "Aleksander Xhuvani"</p>
          </div>

          <p className="education-date">
            <FaCalendarAlt className="calendar-icon" />
            17.10.2022 - 08.07.2024
          </p>
        </div>

      <div className="university-content">
        {/* Div për tekst + lista */}
        <div className="education-text">
          <p>
            During my Bachelor studies in Information Technology, I gained a solid theoretical and practical foundation in software engineering, web application development, and database management. The University of Elbasan, “Aleksandër Xhuvani”, provided me with the opportunity to develop strong skills in programming, systems analysis, and the use of modern technologies such as Python, Java, FastAPI, React, and SQL. In addition, I worked on both individual and group projects that helped me strengthen my practical abilities and improve collaboration in professional environments.
          </p>

          <ul className="skills-inline">
            <li><FaCode className="icon" /> Software Engineering Principles</li>
            <li><FaGlobe className="icon" /> Web Application Development</li>
            <li><FaDatabase className="icon" /> Database Design & Management (SQL)</li>
            <li><FaPython className="icon" /> Programming with Python & Java</li>
            <li><FaServer className="icon" /> Building APIs </li>
            <li><FaUsers className="icon" /> Teamwork & Collaboration</li>
            <li><FaLightbulb className="icon" /> Problem-Solving & Systems Analysis</li>
          </ul>
        </div>

        {/* Div për foto */}
        <div className="education-image">
          <img src={education} alt="Education" className="education-img" />
        </div>
      </div>


      </section>


    </div>
  );
}

export default About;
