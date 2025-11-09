import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "./index.js";
import "./services.css";

function Service() {
  const { serviceName } = useParams(); // e.g. "filmMaking", "branding", "artCuration"
  const navigate = useNavigate();

  const service = servicesData[serviceName];

  if (!service) {
    return (
      <div className="section not-found">
        <h2>Service Not Found</h2>
        <button onClick={() => navigate("/story")}>Back to Story</button>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="header">
        <h1>{service.title}</h1>
        <div className="mark-services">
          <img src="/services/Vector 5.svg" alt="Decoration" />
        </div>
      </div>

      <button className="services-button" onClick={() => navigate("/story")}>
        &lt; Back
      </button>

      <div className="services-content">
        <div>
          <img src={service.image} alt={service.title} />
        </div>

        <div className="services-context">
          <p>{service.description}</p>
          <ul className="services-list">
            {service.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Render icons dynamically */}
          {service.icons.map((icon, index) => (
            <div key={index} className={`ser-cam-0${index + 1}`}>
              <img src={icon} alt={`icon-${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="explore-name">
        <h4 className="explore-name-heading">Explore Now</h4>
        <div className="service-arrow">
          <img src="/services/Arrow.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Service;
