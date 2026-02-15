import React, { useState } from "react";
import "../styles/ProfileCard.css";
import profilePhoto from "../assets/erald.png";
import { AiFillHome, AiFillTrophy, AiFillMessage, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Link } from 'react-router-dom';

function ProfileCard() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger button */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>

      <div className={`profile-card ${isOpen ? "open" : ""}`}>
          <img src={profilePhoto} alt="Erald" className="profile-img" />  
          <h3>Erald Leka</h3>
          <h5>Full-Stack Developer </h5> 

          <a href="/EraldLekaCv.pdf"  target="_blank" rel="noopener noreferrer" className="cv-button">
              Resume
          </a>

          <div className="icons-container">
  <div className="icon-item">
    <AiFillHome className="icon" />
    <Link to="/" className="my-link" onClick={() => setIsOpen(false)}>
      <span>Home</span>
    </Link>
  </div>
  <div className="icon-item">
    <FaUser className="icon" />
    <Link to="/About" className="my-link" onClick={() => setIsOpen(false)}>
      <span>About</span>
    </Link>
  </div>
  <div className="icon-item">
    <MdWork className="icon" />
    <Link to="/Projects" className="my-link" onClick={() => setIsOpen(false)}>
      <span>Projects</span>
    </Link>
  </div>
  <div className="icon-item">
    <AiFillTrophy className="icon" />
    <Link to="/Achievements" className="my-link" onClick={() => setIsOpen(false)}>
      <span>Achievements</span>
    </Link>
  </div>
  <div className="icon-item">
    <AiFillMessage className="icon" />
    <Link to="/Contact" className="my-link" onClick={() => setIsOpen(false)}>
      <span>Contact</span>
    </Link>
  </div>
</div>

      </div>
    </>
  );
}

export default ProfileCard;
