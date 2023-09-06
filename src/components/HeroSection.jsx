import React from "react";
import hero_img from "../assets/hero-img.svg";
import download_img from "../assets/download-app.svg";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-text">
          <h3>Ahead App</h3>
          <h1>Master your life by mastering Emotions</h1>
          <div className="rating-container">
            <img src={download_img} alt="download Ahead app" />
            <h2>Rating...</h2>
          </div>
        </div>
        <div className="phone-img">
          <img src={hero_img} alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
