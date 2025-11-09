import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

import Hero from './components/Hero/Hero';
import Team from './components/About Team/Team.jsx';
import Us from './components/About Us/Us';
import Story from './components/Story/Story';
import Service from './components/Services/Service';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function Navigation({ menuOpen, setMenuOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      {/* Logo with smooth fade-in/fade-out */}
      <div 
        className="main-logo" 
        onClick={handleLogoClick} 
        style={{ 
          cursor: 'pointer', 
          visibility: location.pathname === '/' ? 'hidden' : 'visible',
          opacity: location.pathname === '/' ? 0 : 1,
          transition: 'opacity 0.5s ease, visibility 0.5s ease'
        }}
      > 
        <img src="/home/logo.png" alt="Logo" />
      </div>

      {/* Menu toggle icon */}
      {
        menuOpen &&
        <div className="nav-bar-icon-close" onClick={toggleMenu}>
          <img src="/home/closed navbar.png" alt="Close Menu" />
        </div>
      }

      {/* Nav links */}
      {
        !menuOpen && 
        <ul>
          <li><Link to="/Services" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>Their Stories</Link></li>
          <li><Link to="/Us" onClick={toggleMenu}>Our Story</Link></li>
          <li><Link to="/portfolio" onClick={toggleMenu}>Vaman</Link></li>
          <li><Link to="/contactUs" onClick={toggleMenu}>Let's Talk <span></span></Link></li>
          <li>
            <div className="nav-bar-icon-open" onClick={toggleMenu}>
              <img src="home/Navbar.png" alt="Open Menu" />
            </div>
          </li>
        </ul>
      }
    </nav>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <Router>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Team />} />
        <Route path="/Us" element={<Us />} />
        <Route path="/services" element={<Story />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/services/:serviceName" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
