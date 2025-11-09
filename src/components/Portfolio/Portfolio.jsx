import React from 'react'
import './portfolio.css'

function Portfolio() {
  return (
    <div className="portfolio-section">
        <div className="portfolio-header">
          <h1>The Highlight Reel</h1>
          <h4>Watch the magic we've captured</h4>
        </div>

        <div className="portfolio-content">
          <div className="portfolio-grp">
            <div className="portfolio-main">
              <img src="/portfolio/Group 11.png" alt="" />
            </div>

              <div className="main-right-rectangle">
                <img src="/portfolio/Rectangle 45.png" alt="" />
              </div>
              <div className="main-right-arrow">
                <img src="/portfolio/Vector 9.png" alt="" />
              </div>

            <div className="main-left-rectangle">
              <img src="/portfolio/Rectangle 45.png" alt="" />
            </div>

            <div className="main-left-arrow">
                <img src="/portfolio/Vector 10.png" alt="" />
              </div>
          </div>
        </div>

        <div className="cam-group">
          <img src="/portfolio/Cam Group.svg" alt="" />
        </div>

        <div className="portfolio-footer">
          <img src="/portfolio/Footer Vector.png" alt="" />
        </div>
    </div>
  )
}

export default Portfolio