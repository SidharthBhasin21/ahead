import React, { useEffect } from "react";
import social_img from "../assets/social-img.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Social = () => {
  const animation1 = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };
  const animation2 = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.7 },
    },
  };
  const animation3 = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.9 },
    },
  };
  const animationImg = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.9 },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="social-container" ref={ref}>
      <h3>
        Let your friends, family and co-workers (anonymously) rate your social
        skills.
      </h3>
      <h1>Ever wondered what others think of you?</h1>
      <div className="sun-timeline-container">
        <motion.div
          className="sun-text"
          initial="hidden"
          animate={controls}
          variants={animation1}
        >
          <span>☀️</span>
          <p>Answer question on your social skills</p>
        </motion.div>
        <motion.div
          className="sun-text"
          initial="hidden"
          animate={controls}
          variants={animation2}
        >
          <span>☀️</span>
          <p>Let other anonymously answer same question about you</p>
        </motion.div>
        <motion.div
          className="sun-text"
          initial="hidden"
          animate={controls}
          variants={animation3}
        >
          <span>☀️</span>
          <p>
            Find out where you and other see things the same way- ans where not!
          </p>
        </motion.div>
      </div>

      <motion.img
        src={social_img}
        alt="img"
        className="social-img"
        initial="hidden"
        animate={controls}
        variants={animationImg}
      />
    </div>
  );
};

export default Social;
