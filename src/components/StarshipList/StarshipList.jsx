import React from "react";
import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ displayedStarships }) => {
  return (
    <section>
      <div className="displayship">
        {displayedStarships.map((value) => {
          return (
            <StarshipCard
              key={value.name}
              name={value.name}
              model={value.model}
              manufacturer={value.manufacturer}
              class={value.starship_class}
            />
          );
        })}
      </div>
    </section>
  );
  // });
};

export default StarshipList;
