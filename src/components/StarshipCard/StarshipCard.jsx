import React from "react";

const StarshipCard = (props) => {
  return (
    <>
      <section>
        <ul>
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

{
  /* <div className="bookCardsDiv">
          {books.map((book) => (
            <>
              <div className="bookCard">
                <h2>{book.title}</h2> <br /> <h3>by {book.author}</h3>
              </div>
            </>
          ))}
        </div> */
}
