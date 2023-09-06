import React from "react";
import img1 from "../assets/img1.svg";

const Motivation = () => {
  return (
    <div className="motivation-container">
      <p>Built out of frustation</p>
      <h1>Meet the ahead app</h1>
      <div className="motivation-text-container">
        <img src={img1} alt="dummyimage" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
          nostrum ab? Reprehenderit error, obcaecati consectetur odit fuga
          assumenda <br /> <br /> perferendis laudantium cum earum temporibus,
          odio facilis. Corrupti ducimus.
        </p>
      </div>
    </div>
  );
};

export default Motivation;
