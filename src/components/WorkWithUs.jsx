import React from "react";
import logo from "../assets/logo.svg";
import Card from "./Card";

const WorkWithUs = () => {
  return (
    <div className="work-container">
      <div className="about-container">
        <h2>Work with us</h2>
        <div className="new-container">
          <div className="about">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              possimus neque dolorum odio cupiditate ipsa quia?
            </p>
          </div>
          <div className="about product ">
            <h3>Product</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              aperiam quasi tempore mollitia enim praesentium perferendis
              incidunt similique sequi dicta.
            </p>
          </div>
        </div>
      </div>
      <div className="ahead-container">
        <img src={logo} alt="logo" />
        <div>
          <Card />

          <Card />
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
