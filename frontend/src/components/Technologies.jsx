import React, { useState, useEffect } from "react";
import "../styles/Technologies.css";
import { FaReact, FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaFlask } from "react-icons/fa";
import { SiJavascript, SiMysql, SiDocker, SiFastapi,SiPostgresql, SiR } from "react-icons/si";

function Technologies() {
  const icons = [
    { icon: <FaReact />, color: "#61DBFB", name: "React" },
    { icon: <FaPython />, color: "#306998", name: "Python" },
    { icon: <FaJava />, color: "#f89820", name: "Java" },
    { icon: <FaHtml5 />, color: "#E34F26", name: "HTML5" },
    { icon: <FaCss3Alt />, color: "#1572B6", name: "CSS3" },
    { icon: <FaGitAlt />, color: "#F05032", name: "Git" },
    { icon: <FaFlask />, color: "#000000", name: "Flask" },
    { icon: <SiJavascript  className="js"/>, color: "#F7DF1E", name: "JavaScript" },
    { icon: <SiMysql />, color: "#00758F", name: "MySQL" },
    { icon: <SiDocker />, color: "#2496ED", name: "Docker" },
    { icon: <SiFastapi />, color: "#009688", name: "FastAPI" },
    {icon: <SiPostgresql/>, color:"#075087ff", name: "Postgresql"},
    {icon: <SiR/>, color:"#184a71ff", name: "R"},

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % icons.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [icons.length]);

  return (
    <section className="technologies-section">
      {/* Shirit lart */}
      <div className="scroll-strip top">
        <div className="strip-track">
          {[...icons, ...icons].map((item, index) => (
            <div
              key={`top-${index}`}
              className="strip-icon"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Ikona qendrore me emrin poshte */}
      <div className="center-icon-container">
        <div
          className="center-icon"
          style={{ color: icons[currentIndex].color }}
        >
          {icons[currentIndex].icon}
        </div>
        <div className="center-icon-name">{icons[currentIndex].name}</div>
      </div>

      {/* Shirit poshtë */}
      <div className="scroll-strip bottom">
        <div className="strip-track">
          {[...icons, ...icons].map((item, index) => (
            <div
              key={`bottom-${index}`}
              className="strip-icon"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
