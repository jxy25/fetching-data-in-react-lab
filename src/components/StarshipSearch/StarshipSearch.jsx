import React from "react";
import { useState } from "react";

const starshipSearch = (props) => {
  const [ship, setShip] = useState([]);
  // const [prevSearchTerm, setPrevSearchTerm] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearch(ship);
    setShip("");
  };

  return (
    <div>
      {props.prevSearchTerm
        ? `Results for: ${props.prevSearchTerm}`
        : `Search for a starship by  name`}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ship}
          onChange={(e) => setShip(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default starshipSearch;
