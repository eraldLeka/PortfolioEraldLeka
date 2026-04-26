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
import ExpertSection from "../components/ExpertSection";
import LazyVideo from "../components/LazyVideo.jsx";
import LazyImage from "../components/LazyImage.jsx";



function About() {
  return (
    <div className="about-page">
      <section className="about-section">
        {/* Video në kolonën e majtë */}
        <div className="about-video-wrapper">
          <LazyVideo
            src="/videos/aboutIntro.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="about-video"
            rootMargin="600px"
          >
            Your browser does not support the video tag.
          </LazyVideo>
        </div>

        <div className="about-content">
          <h1>Who Am I?</h1>
        </div>
      </section>

      <section className="personal-content">
        <div className="personal-bio">
      <p >
        <AiOutlinePushpin color="red"/>
        Backend-focused software developer with experience in C# (.NET) and Python (FastAPI), building RESTful APIs and web applications with React-based frontends. Currently pursuing a Master’s degree in Computer Engineering while developing real-world projects focused on scalable backend architecture, database design, and clean system structure.</p> 
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
          <LazyImage src={university} alt="University" className="university" />

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
      </div>


      </section>


    </div>
  );
}

export default About;
