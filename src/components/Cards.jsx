import React, { useEffect } from "react";
import Card from "./Card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Cards = () => {
  const animationVariants = {
    hidden: { opacity: 0, scale: 0.1, x: -1000 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
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
    <div className="cards-container" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        <h2>Does this sound familiar...</h2>
      </motion.div>
      <div className="cards-scroll">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;
