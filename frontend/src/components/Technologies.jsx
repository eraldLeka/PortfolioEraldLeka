import React from "react";
import "../styles/Technologies.css";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiDocker,
  SiDotnet,
  SiFastapi,
  SiFlask,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiR,
} from "react-icons/si";

function Technologies() {
  const skills = [
    { label: "React", Icon: FaReact },
    { label: "Python", Icon: FaPython },
    { label: "Java", Icon: FaJava },
    { label: "HTML5", Icon: FaHtml5 },
    { label: "CSS3", Icon: FaCss3Alt },
    { label: "Git", Icon: FaGitAlt },
    { label: "Flask", Icon: SiFlask },
    { label: "JavaScript", Icon: SiJavascript },
    { label: "MySQL", Icon: SiMysql },
    { label: "Docker", Icon: SiDocker },
    { label: "FastAPI", Icon: SiFastapi },
    { label: "Postgresql", Icon: SiPostgresql },
    { label: "R", Icon: SiR },
    { label: ".NET", Icon: SiDotnet },
  ];

  return (
    <div className="skillsGrid" aria-label="Skills">
      {skills.map((skill) => (
        <span key={skill.label} className="skillTag">
          <skill.Icon className="skillTag__icon" aria-hidden="true" />
          <span className="skillTag__label">{skill.label}</span>
        </span>
      ))}
    </div>
  );
}

export default Technologies;
