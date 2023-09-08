import React from "react";

const ListCard = ({ heading }) => {
  return (
    <div className="list-card">
      <h3>{heading}</h3>
      <ul className="card-list">
        <li>Full-time positions</li>
        <li>Berlin or remote</li>
        <li>$65-85k, 0.5.-1.5% equity share options</li>
      </ul>
    </div>
  );
};

export default ListCard;
