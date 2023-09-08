import React from "react";
import logo from "../assets/logo.svg";
import download_img from "../assets/download-app.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo" />
      <div className="address">
        <span>🏠 Augustsrabe 26, 10117 Berlin</span>{" "}
        <span> 📩 hi@ahead-app.com</span>
      </div>
      <img src={download_img} alt="download" />
      <p>© 2023 Ahead app. All rights reserved</p>
    </div>
  );
};

export default Footer;
