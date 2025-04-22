import React from "react";

import { useState } from "react";

const starshipSearch = (props) => {
  const [ship, setShip] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchData(ship);
    setShip({});
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ship">Search Term:</label>
        <input
          id="ship"
          type="text"
          value={ship.name}
          onChange={(e) => setShip(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default starshipSearch;
