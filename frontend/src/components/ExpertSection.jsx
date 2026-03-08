import { useEffect, useState } from "react";
import { FaServer, FaLaptopCode, FaDatabase, FaTimes, FaHandPointer } from "react-icons/fa";
import {
  SiPython,
  SiDotnet,
  SiJavascript,
  SiFlask,
  SiFastapi,
  SiReact,
  SiHtml5,
  SiCss3,
  SiWordpress,
  SiFigma,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiPandas,
  SiR,
} from "react-icons/si";
import "../styles/ExpertSection.css";

const ExpertSection = () => {
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    if (!activeKey) return;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setActiveKey(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeKey]);

  const sections = [
    {
      key: "backend",
      title: "Backend",
      subtitle: "APIs and services",
      Icon: FaServer,
      accent: "#1e90ff",
      accentSoft: "rgba(30, 144, 255, 0.14)",
      tech: [
        { label: "Python", Icon: SiPython },
        { label: "C# (.NET)", Icon: SiDotnet },
        { label: "JavaScript", Icon: SiJavascript },
        { label: "Flask", Icon: SiFlask },
        { label: "RESTful API", Icon: FaServer },
        { label: "FastAPI", Icon: SiFastapi },
      ],
    },
    {
      key: "frontend",
      title: "Frontend",
      subtitle: "UI and experience",
      Icon: FaLaptopCode,
      accent: "#28a745",
      accentSoft: "rgba(40, 167, 69, 0.14)",
      tech: [
        { label: "React", Icon: SiReact },
        { label: "HTML5", Icon: SiHtml5 },
        { label: "CSS3", Icon: SiCss3 },
        { label: "Figma", Icon: SiFigma },
      ],
    },
    {
      key: "data",
      title: "Data and DB",
      subtitle: "Storage and ML",
      Icon: FaDatabase,
      accent: "#ff8c00",
      accentSoft: "rgba(255, 140, 0, 0.16)",
      tech: [
        { label: "PostgreSQL", Icon: SiPostgresql },
        { label: "MySQL", Icon: SiMysql },
        { label: "SQLite", Icon: SiSqlite },
        { label: "Pandas", Icon: SiPandas },
        { label: "Python", Icon: SiPython },
        { label: "R", Icon: SiR },
      ],
    },
  ];

  const activeSection = sections.find((section) => section.key === activeKey);

  return (
    <section className="expert">
      <p className="expert-hint">
        <FaHandPointer className="expert-hint-icon" />
        Click an icon to view the technologies.
      </p>
      <div className="expert-grid">
        {sections.map((section) => (
          <button
            key={section.key}
            type="button"
            className="expert-orbit-btn"
            style={{
              "--orbit-accent": section.accent,
              "--orbit-accent-soft": section.accentSoft,
            }}
            onClick={() => setActiveKey(section.key)}
          >
            <span className="expert-orbit-icon">
              <section.Icon />
            </span>
            <span className="expert-orbit-title">{section.title}</span>
            <span className="expert-orbit-subtitle">{section.subtitle}</span>
          </button>
        ))}
      </div>

      {activeSection && (
        <div className="expert-modal-overlay" onClick={() => setActiveKey(null)}>
          <div className="expert-modal" onClick={(event) => event.stopPropagation()}>
            <header className="expert-modal-header">
              <div className="expert-modal-title">
                <span
                  className="expert-modal-badge"
                  style={{
                    "--orbit-accent": activeSection.accent,
                    "--orbit-accent-soft": activeSection.accentSoft,
                  }}
                >
                  <activeSection.Icon />
                </span>
                <div>
                  <h3>{activeSection.title} Stack</h3>
                  <p>{activeSection.subtitle}</p>
                </div>
              </div>
              <button
                type="button"
                className="expert-modal-close"
                onClick={() => setActiveKey(null)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </header>
            <div className="expert-modal-grid">
              {activeSection.tech.map((tech) => (
                <div key={tech.label} className="expert-modal-item">
                  <tech.Icon className="expert-modal-icon" />
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExpertSection;
