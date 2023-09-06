import React from "react";
import logo from "../assets/logo.svg";
import download_btn from "../assets/download-app.svg";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="navlist-container">
        <ul>
          <li className="nav-links">
            <a href="#">Emotions</a>
          </li>
          <li className="nav-links">
            <a href="#">Manifesto</a>
          </li>
          <li className="nav-links">
            <a href="#">Self-awareness test</a>
          </li>
          <li className="nav-links">
            <a href="#">Work with us</a>
          </li>
        </ul>
      </div>

      <div className="download-btn">
        <Button text="Download App" />
      </div>
    </nav>
  );
};

export default NavBar;
