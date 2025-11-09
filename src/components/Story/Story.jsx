import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './story.css';

function Story() {
  const navigate = useNavigate();
  const [hoveredProfile, setHoveredProfile] = useState(null);

  const profiles = [
    {
      id: 1,
      img: 'services/Frame 31.png',
      tape: 'services/image 6.png',
      link: '/services/filmMaking',
      tapeClass: 'tape-1',
      profileClass: 'profile-1',
    },
    {
      id: 2,
      img: 'services/Frame 31-1.png',
      tape: 'services/image 6.png',
      link: '/services/branding',
      tapeClass: 'tape-2',
      profileClass: 'profile-2',
    },
    {
      id: 3,
      img: 'services/Frame 31-2.png',
      tape: 'services/image 6.png',
      link: '/services/artCuration',
      tapeClass: 'tape-3',
      profileClass: 'profile-3',
    },
  ];

  const handleHover = (id, link) => {
    setHoveredProfile(id);
    setTimeout(() => navigate(link), 600); // allow animation before routings
  };

  return (
    <div className="story-section">
      <div className="header">
        <h1>The storyboard reveals the breadth of our craft.</h1>
        <div className="mark">
          <img src="services/Vector 5.svg" alt="" />
        </div>
      </div>

      <div className="profile-section">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className={`${profile.profileClass} ${hoveredProfile === profile.id ? 'hovered' : ''}`}
            onMouseEnter={() => handleHover(profile.id, profile.link)}
          >
            <img src={profile.img} alt={`Profile ${profile.id}`} />
            <div className={profile.tapeClass}>
              <img src={profile.tape} alt="tape" />
            </div>
          </div>
        ))}
      </div>

      <div className="frame">
        <img src="services/Frame 33.svg" alt="" />
      </div>
    </div>
  );
}

export default Story;
