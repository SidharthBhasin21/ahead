import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
import Card from "./Card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WorkWithUs = () => {
  const animationVariants = {
    hidden: { opacity: 0, scale: 0.1, x: -1000 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.6 },
    },
  };
  const animationAbout = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.7 },
    },
  };
  const animationProduct = {
    hidden: { opacity: 0, scale: 2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.9 },
    },
  };
  const animationAheadImg = {
    hidden: { opacity: 0, scale: 2, y: -1000 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.9 },
    },
  };
  const animationAhead = {
    hidden: { opacity: 0, scale: 0, x: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
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
    <div className="work-container" ref={ref}>
      <motion.div className="about-container">
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={animationVariants}
        >
          Work with us
        </motion.h2>
        <div className="new-container">
          <motion.div
            className="about"
            initial="hidden"
            animate={controls}
            variants={animationAbout}
          >
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              possimus neque dolorum odio cupiditate ipsa quia?
            </p>
          </motion.div>
          <motion.div
            className="about product "
            initial="hidden"
            animate={controls}
            variants={animationProduct}
          >
            <h3>Product</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              aperiam quasi tempore mollitia enim praesentium perferendis
              incidunt similique sequi dicta.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="ahead-container">
        <motion.img
          src={logo}
          alt="logo"
          initial="hidden"
          animate={controls}
          variants={animationAheadImg}
        />
        <motion.div
          initial="hidden"
          animate={controls}
          variants={animationAhead}
        >
          <Card />

          <Card />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkWithUs;
