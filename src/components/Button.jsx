import { motion } from "framer-motion";
import React from "react";

const Button = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button className="black-btn">{text}</button>
    </motion.div>
  );
};

export default Button;
