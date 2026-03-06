import { useState } from "react";
import { FaServer, FaLaptopCode, FaDatabase, FaBrain, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../styles/ExpertSection.css";

const ExpertSection = () => {
  // State i veçantë për secilin seksion
  const [openStates, setOpenStates] = useState({
    backend: false,
    frontend: false,
    database: false,
    ml: false,
  });

  const toggle = (key) => {
    // Hap vetëm një seksion në të njëjtën kohë
    const newStates = {
      backend: false,
      frontend: false,
      database: false,
      ml: false,
    };
    newStates[key] = !openStates[key];
    setOpenStates(newStates);
  };

  const sections = [
    {
      key: "backend",
      title: "Backend Development",
      icon: <FaServer style={{ color: "#1e90ff" }} />,
      items: ["Python", "JavaScript", "Flask", "RESTful API", "FastAPI"],
    },
    {
      key: "frontend",
      title: "Frontend Development",
      icon: <FaLaptopCode style={{ color: "#28a745" }} />,
      items: ["React.js", "HTML & CSS", "WordPress", "Figma"],
    },
    {
      key: "database",
      title: "Database Management",
      icon: <FaDatabase style={{ color: "#ff8c00" }} />,
      items: ["MySQL", "PostgreSQL", "SQLite"],
    },
    {
      key: "ml",
      title: "Machine Learning",
      icon: <FaBrain style={{ color: "#800080" }} />,
      items: ["Python", "Pandas", "R"],
    },
   
  ];

  return (
    <section className="expert">
      {sections.map((section) => (
        <div key={section.key} className={`expert-card ${openStates[section.key] ? "open" : ""}`}>
          <header className="expert-header" onClick={() => toggle(section.key)}>
            <div className="expert-title">
              {section.icon}
              <span>{section.title}</span>
            </div>
            {openStates[section.key] ? <FaChevronUp /> : <FaChevronDown />}
          </header>
          <div className="expert-content" style={{ maxHeight: openStates[section.key] ? "500px" : "0" }}>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExpertSection;
