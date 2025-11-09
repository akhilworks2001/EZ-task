import React from "react";
import "./team.css";
import { Link } from "react-router";

function Team() {
  return (
    <div className="team-section">
      <div className="team-content">
        <div className="note-n-gate-container">
          <div className="note">
            <img src="/about/Group 9.png" alt="" />
          </div>
          <div className="ind-container">
            <img src="about\india-gate.svg" alt="" />
          </div>
        </div>

        <div className="group-container">
          <div className="group">
            <img src="/about/Group 2.png" alt="" />
          </div>

          <div className="bottom-container">
            <p className="bottom-text">film Makers</p>
            <div className="bottom-arrow">
              <img src="/about/Vector (1).svg" alt="" />
            </div>
          </div>

          <div className="left-container">
            <p className="left-text">Art Curators</p>
            <div className="left-arrow">
              <img src="/about/Vector (2).svg" alt="" />
            </div>
          </div>

          <div className="right-container">
            <div className="right-arrow">
              <img src="about/Vector.svg" alt="" />
            </div>
            <p className="right-text">Branding Experts</p>
          </div>

          <div className="team-content-title">
            <h2>Take a closer look at the stories V bring to life.</h2>
            <Link to="/portfolio">
              <button className="portfolio-btn">View Portfolio</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
