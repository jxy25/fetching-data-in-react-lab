import React from "react";
import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ starshipData }) => {
  return (
    <section>
      <div>
        {starshipData.map((value) => {
          return (
            <StarshipCard
              key={value.name}
              name={value.name}
              model={value.model}
              manufacturer={value.manufacturer}
              class={value.starship_class}
              starshipData={starshipData}
            />
          );
        })}
      </div>
    </section>
  );
  // });
};

export default StarshipList;
