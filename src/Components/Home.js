import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./Home.css"; // Importing the CSS file

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="home-container">
      <div className="home-content">
        {/* Left Section - Text and Buttons */}
        <div className="home-text">
          <h2 className="home-tagline">
            Protect What Matters Most - <br />
            Choose the Right Insurance for You!
          </h2>

          {/* Insurance Buttons */}
          <div className="home-buttons">
            <button
              className="home-button"
              onClick={() => navigate("/life-insurance")}
            >
              LIFE INSURANCE
            </button>
            <button 
              className="home-button"
              onClick={() => navigate("/health")}
              >HEALTH INSURANCE</button>
            <button className="home-button"
            onClick={() => navigate("/homeins")}
            >HOME INSURANCE</button>
            <button className="home-button"
            onClick={() => navigate("/motorins")}
            >MOTOR INSURANCE</button>
          </div>

          {/* Start Now Button */}
          <button className="start-button">START NOW</button>
        </div>

        {/* Right Section - Image */}
        <div className="home-image">
          <img
            src="front.jpg"
            alt="Insurance Illustration"
            className="insurance-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
