import React from "react";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="navbar">
      <motion.div
        className="logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={logo} alt="Logo" />
      </motion.div>

      <motion.div
        className="navlist-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ul>
          <motion.li
            className="nav-links"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <a href="#">Emotions</a>
          </motion.li>
          <motion.li
            className="nav-links"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <a href="#">Manifesto</a>
          </motion.li>
          <motion.li
            className="nav-links"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <a href="#">Self-awareness test</a>
          </motion.li>
          <motion.li
            className="nav-links"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <a href="#">Work with us</a>
          </motion.li>
        </ul>
      </motion.div>

      <div className="download-btn">
        <Button text="Download App" />
      </div>
    </nav>
  );
};

export default NavBar;
