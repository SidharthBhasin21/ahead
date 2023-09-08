import React, { useEffect } from "react";
import img1 from "../assets/img1.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Motivation = () => {
  const animationHeader = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.9 } },
  };
  const animationImg = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.9 } },
  };
  const animationText = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.9 } },
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
    <div className="motivation-container" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={animationHeader}
      >
        <p>Built out of frustation</p>
        <h1>Meet the ahead app</h1>
      </motion.div>
      <div className="motivation-text-container">
        <motion.div initial="hidden" animate={controls} variants={animationImg}>
          <img src={img1} alt="dummyimage" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={animationText}
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            nostrum ab? Reprehenderit error, obcaecati consectetur odit fuga
            assumenda <br /> <br /> perferendis laudantium cum earum temporibus,
            odio facilis. Corrupti ducimus.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Motivation;
