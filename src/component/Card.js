import React from "react";
import "./card.css";

function Card({ name, email, id, image }) {
  return (
    <div className="bg-light-green dib br3  ma2 pa3 grow bw2 shadow-5 flex-wrap custom-background">
      <img
        src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
        alt="Pokemon"
        className="image"
        height={40}
        width={40}
      />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default Card;
