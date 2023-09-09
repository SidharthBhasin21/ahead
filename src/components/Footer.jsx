import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
import download_img from "../assets/download-app.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const animationVariants = {
    hidden: { opacity: 0, scale: 0.1, y: 1000 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.4 },
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
    <div ref={ref}>
      <motion.div
        className="footer"
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        <img src={logo} alt="logo" />
        <div className="address">
          <span>🏠 Augustsrabe 26, 10117 Berlin</span>{" "}
          <span> 📩 hi@ahead-app.com</span>
        </div>
        <img src={download_img} alt="download" />
        <p>© 2023 Ahead app. All rights reserved</p>
      </motion.div>
    </div>
  );
};

export default Footer;
