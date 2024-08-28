import React, { useState, useContext } from "react";
import { TeamContext } from "./TeamContext";

function PokemonCard({ pokemon }) {
  const [isFront, setIsFront] = useState(true);
  const { addToTeam } = useContext(TeamContext);

  const handleImageClick = () => {
    setIsFront(!isFront);
  };

  const handleAddToTeam = () => {
    addToTeam(pokemon);
  };

  return (
    <div className="PokemonCard">
      <div onClick={handleImageClick}>
        <img src={isFront ? pokemon.sprites.front : pokemon.sprites.back} alt={pokemon.name} />
      </div>
      <div className="card-body">
        <h2>{pokemon.name}</h2>
        <p>HP: {pokemon.hp}</p>
        <button onClick={handleAddToTeam}>Add to Team</button>
      </div>
    </div>
  );
}

export default PokemonCard;