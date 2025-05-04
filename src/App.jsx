import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import StarshipList from "./components/StarshipList/StarshipList";
// import starshipService from "./services/starshipService";
import { useState, useEffect } from "react";

const App = () => {
  const [starshipData, setStarshipData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  const fetchData = async (ship) => {
    const res = await fetch("https://swapi.info/api/starships");

    if (res.ok) {
      const data = await res.json();

      const newStarship = {
        name: data.name,
        class: data.starship_class,
        manufacturer: data.manufacturer,
        model: data.model,
      };

      setStarshipData(data);
      setDisplayedStarships(data);
      console.log("Data:", data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchShip) => {
    setPrevSearchTerm(searchShip);

    setDisplayedStarships(
      starshipData.filter((ship) =>
        ship.name.toLowerCase().includes(searchShip.toLowerCase())
      )
    );
  };

  const handleShowAllShips = () => {
    setPrevSearchTerm("");
    setDisplayedStarships(starshipData);
  };

  return (
    <main>
      <div>
        <h1>Star Wars API</h1>
        <StarshipSearch
          handleSearch={handleSearch}
          prevSearchTerm={prevSearchTerm}
        />
        {prevSearchTerm && (
          <button onClick={handleShowAllShips}>Show all starships</button>
        )}
        <StarshipList displayedStarships={displayedStarships} />
      </div>
    </main>
  );
};

export default App;
