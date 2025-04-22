import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import StarshipList from "./components/StarshipList/StarshipList";
// import starshipService from "./services/starshipService";
import { useState, useEffect } from "react";

const App = () => {
  const [starshipData, setStarshipData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

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

  return (
    <main>
      <div>
        <h1>Star Wars API</h1>
        <StarshipSearch fetchData={fetchData} />
        <StarshipList starshipData={starshipData} />
      </div>
    </main>
  );
};

export default App;
