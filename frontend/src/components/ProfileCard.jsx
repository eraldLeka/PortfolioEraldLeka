import React from "react";
import "../styles/ProfileCard.css";
import profilePhoto from "../assets/erald.png";
import { AiFillHome, AiFillTrophy, AiFillMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Link } from 'react-router-dom';

function ProfileCard() {
  return (
    <>
      <div className="profile-card">
        <div className="profile-top">
          <img src={profilePhoto} alt="Erald" className="profile-img" />
          <div className="profile-meta">
            <h3>Erald Leka</h3>
            <h5>Full-Stack Developer</h5>
          </div>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button"
          >
            Resume
          </a>
        </div>

        <div className="icons-container">
          <Link to="/" className="icon-item" aria-label="Home" title="Home">
            <AiFillHome className="icon" />
            <span>Home</span>
          </Link>

          <Link to="/about" className="icon-item" aria-label="About" title="About">
            <FaUser className="icon" />
            <span>About</span>
          </Link>

          <Link to="/projects" className="icon-item" aria-label="Projects" title="Projects">
            <MdWork className="icon" />
            <span>Projects</span>
          </Link>

          <Link
            to="/achievements"
            className="icon-item"
            aria-label="Achievements"
            title="Achievements"
          >
            <AiFillTrophy className="icon" />
            <span>Achievements</span>
          </Link>

          <Link to="/contact" className="icon-item" aria-label="Contact" title="Contact">
            <AiFillMessage className="icon" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
