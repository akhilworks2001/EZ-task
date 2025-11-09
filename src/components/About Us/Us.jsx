import React from 'react'
import './us.css';

function Us() {
  return (
    <div className="us-section">
        <div className="about-section">
            <h2>A montage of familiar faces and names.</h2> 
            <p>Some stories come from the biggest names. Others begin with bold,        rising  voices.
                <br />
                We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.
            </p>

            <div className="detail-section">
                <div className="projects">
                    <img src='about/Frame 9.png' alt="" />
                </div>
                <div className="clients">
                    <img src='about/Frame 22.png' alt="" />
                </div>
                <div className="team">
                    <img src='about/Frame 23.png' alt="" />
                </div>
            </div>
        </div>

        <div className="context-section">
            <h1>
                Every project is more than just a brief - it’s a new chapter waiting to be written.
            <br />
                Together, we've crafted tales that inspire, connect, and endure.
            </h1>

            <div className="brand-section">
                <div className="logo">
                    <img src="about/Group 10.png" alt="" />
                </div>
                <div className="mountain">
                    <img src="about/OBJECTS.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Us