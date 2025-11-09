import React from 'react'

import './Hero.css'

function Hero() {
  return (
    <div className="hero-section">
    <div className="hero-content">
      <div className="logo-container">
        <div className="logo-img-container">
          <img src="home/logo.png" alt="" />
        </div>
        <div className="mandala-img-container">
          <img src="home/Mandala.png" alt="" />
        </div>
      </div>

      <div className="text-container">
        <h2 className="tagline">
          Varnan is where stories find <br />
          their voice and form
        </h2>

        <p className="subheading">Films . Brands . Art</p>

        <p className="description">
          Since 2009, V’ve been telling stories – stories of people, their journeys,
          and the places that shape them. Some begin in polished boardrooms, others
          in humble village squares. But every story starts the same way – by
          listening with intention. V believes it takes trust, patience, and an eye
          for the unseen to capture what truly matters. V doesn’t just tell stories –
          V honors them.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Hero