import React from "react";
import "../styles/ProfileCard.css";
import profilePhoto from "../assets/erald.png";
import { AiFillHome, AiFillTrophy, AiFillMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import {Link } from 'react-router-dom';


function ProfileCard() {
    return (
        <div className="profile-card">
            <img src={profilePhoto} alt="Erald" className="profile-img" />  
            <h3>Erald Leka</h3>
            <h5>Full-Stack Developer </h5> 
            <h5>Machine Learning</h5>

            <a href="/EraldLekaCV.pdf" target="_blank" rel="noopener noreferrer" className="cv-button">
                Resume
            </a>


            <div className="icons-container">
                <div className="icon-item">
                    <AiFillHome className="icon" />
                     <Link to="/" className="my-link">
                     <span>Home</span>
                    </Link>
                </div>
                <div className="icon-item">
                    <FaUser className="icon" />
                    <Link to="/About" className="my-link">
                    <span>About</span>
                    </Link>
                </div>
                <div className="icon-item">
                    <MdWork className="icon" />
                    <Link to="/Projects" className="my-link">
                    <span>Projects</span>
                    </Link>
                </div>
                <div className="icon-item">
                    <AiFillTrophy className="icon" />
                    <Link to="/Achievements" className="my-link">
                    <span>Achievements</span>
                    </Link>
                </div>
                <div className="icon-item">
                    <AiFillMessage className="icon"/>
                    <Link to="/Contact" className="my-link">
                    <span>Contact</span>
                    </Link>
                </div>
                
            </div>
        </div>
    );
}

export default ProfileCard;
