import React from "react";
import hero_img from "../assets/hero-img.svg";
import download_img from "../assets/download-app.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-text">
          <h3>Ahead App</h3>
          <h1>Master your life by mastering Emotions</h1>
          <div className="rating-container">
            <img src={download_img} alt="download Ahead app" />
            <h2>⭐⭐⭐⭐</h2>
          </div>
        </div>
        <motion.div
          className="phone-img"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <img src={hero_img} alt="hero-image" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
