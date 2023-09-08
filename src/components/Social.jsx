import React from "react";
import social_img from "../assets/social-img.svg";

const Social = () => {
  return (
    <div className="social-container">
      <h3>
        Let your friends, family and co-workers (anonymously) rate your social
        skills.
      </h3>
      <h1>Ever wondered what others think of you?</h1>
      <div className="sun-timeline-container">
        <div className="sun-text">
          <span>☀️</span>
          <p>Answer question on your social skills</p>
        </div>
        <div className="sun-text">
          <span>☀️</span>
          <p>Let other anonymously answer same question about you</p>
        </div>
        <div className="sun-text">
          <span>☀️</span>
          <p>
            Find out where you and other see things the same way- ans where not!
          </p>
        </div>
      </div>
      <img src={social_img} alt="img" className="social-img" />
    </div>
  );
};

export default Social;
