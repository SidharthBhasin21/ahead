import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="cards-container">
      <h2>Does this sound familiar...</h2>
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
