import React, { useState } from "react";

function PokemonCard({ pokemon, addToTeam }) {
  const [isFront, setIsFront] = useState(true);

  const handleImageClick = () => {
    setIsFront(!isFront);
  };

  return (
    <div className="PokemonCard">
      <div onClick={handleImageClick}>
        <img src={isFront ? pokemon.sprites.front : pokemon.sprites.back} alt={pokemon.name} />
      </div>
      <div className="card-body">
        <h2>{pokemon.name}</h2>
        <p>HP: {pokemon.hp}</p>
        <button onClick={() => addToTeam(pokemon)}>Add to Team</button>
      </div>
    </div>
  );
}

export default PokemonCard;