import React from "react";
import "../styles/About.css";
import {
  FaCalendarAlt,
  FaCode,
  FaDatabase,
  FaGlobe,
  FaLightbulb,
  FaPython,
  FaServer,
  FaUsers,
} from "react-icons/fa";
import { AiOutlinePushpin } from "react-icons/ai";
import university from "../assets/university.png";
import ExpertSection from "../components/ExpertSection";
import LazyImage from "../components/LazyImage.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Technologies from "../components/Technologies.jsx";

function About() {
  return (
    <div className="about page">
      <section className="aboutHero">
        <div className="aboutHero__grid">
          <div className="aboutHero__bio">
            <h1 className="aboutHero__title">Who Am I?</h1>
            <p className="aboutHero__lead">
              <AiOutlinePushpin className="aboutHero__pin" />
              Backend-focused software developer with experience in C# (.NET) and
              Python (FastAPI), building RESTful APIs and web applications with
              React-based frontends. Currently pursuing a Masterâ€™s degree in
              Computer Engineering while developing real-world projects focused
              on scalable backend architecture, database design, and clean
              system structure.
            </p>
          </div>

          <div className="aboutHero__skills">
            <SectionHeading number="01" title="My Skills" as="h2" />
            <Technologies />
          </div>
        </div>
      </section>

      <Reveal as="section" className="section expert-section">
        <SectionHeading number="02" title="What Can I Do?" as="h2" />
        <ExpertSection />
      </Reveal>

      <Reveal as="section" className="section education">
        <SectionHeading number="03" title="Education" as="h2" />

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
          <div className="education-text">
            <p>
              During my Bachelor studies in Information Technology, I gained a
              solid theoretical and practical foundation in software
              engineering, web application development, and database management.
              The University of Elbasan, â€œAleksandÃ«r Xhuvaniâ€, provided me
              with the opportunity to develop strong skills in programming,
              systems analysis, and the use of modern technologies such as
              Python, Java, FastAPI, React, and SQL. In addition, I worked on
              both individual and group projects that helped me strengthen my
              practical abilities and improve collaboration in professional
              environments.
            </p>

            <ul className="skills-inline">
              <li>
                <FaCode className="icon" /> Software Engineering Principles
              </li>
              <li>
                <FaGlobe className="icon" /> Web Application Development
              </li>
              <li>
                <FaDatabase className="icon" /> Database Design &amp; Management
                (SQL)
              </li>
              <li>
                <FaPython className="icon" /> Programming with Python &amp; Java
              </li>
              <li>
                <FaServer className="icon" /> Building APIs
              </li>
              <li>
                <FaUsers className="icon" /> Teamwork &amp; Collaboration
              </li>
              <li>
                <FaLightbulb className="icon" /> Problem-Solving &amp; Systems
                Analysis
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default About;

