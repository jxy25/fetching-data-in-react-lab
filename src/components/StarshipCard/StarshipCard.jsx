import React from "react";

const StarshipCard = (props) => {
  return (
    <>
      <section>
        <ul className="swCard">
          <h2>{props.name}</h2>
          <li>Class: {props.class}</li>
          <li>Manufacturer : {props.manufacturer}</li>
          <li>Model: {props.model}</li>
        </ul>
      </section>
    </>
  );
};

export default StarshipCard;
