import React from "react";
import ListCard from "./ListCard";

const Vacancies = () => {
  return (
    <div className="vacancies-container">
      <h1>Open Vacancies</h1>
      <div className="vacancies-cards-container">
        <ListCard heading="Junior full-stack engineer" />
        <ListCard heading="Senior Design" />
        <ListCard heading="Superstart Intern" />
      </div>
    </div>
  );
};

export default Vacancies;
