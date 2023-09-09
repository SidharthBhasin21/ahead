import React, { useEffect } from "react";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Quote = () => {
  const animationVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,

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
    <motion.div
      className="quote-container"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
    >
      <p>We take privacy seriously</p>
      <h2>Before you get started</h2>
      <p>
        "We won't share your answers with anyone (and won't ever tell you which
        friend said what about you)"
      </p>
      <div>
        <span>with love,</span>
        <img
          src="https://img.icons8.com/ios/50/signature.png"
          alt="signature"
        />
      </div>
      <Button text="Start a text" />
    </motion.div>
  );
};

export default Quote;
