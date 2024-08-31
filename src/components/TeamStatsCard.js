// TeamStatsCard.js
import React from "react";
import newData from "./newData.json"; // Import the JSON data
import "./TeamStatsCard.css"; // Import the CSS file for styling

function TeamStatsCard({ pokemon, onRemove }) {
  const getPokemonStats = (pokemonId) => {
    const pokemonData = newData.pokemon.find((p) => p.id === pokemonId);
    return pokemonData ? pokemonData : null;
  };

  const pokemonStats = getPokemonStats(pokemon.id);

  return (
    <div className="TeamStatsCard">
      <img
        src={pokemon.sprites.front}
        alt={pokemon.name}
        className="TeamStatsCard-image"
      />
      <div className="TeamStatsCard-name">{pokemon.name}</div>
      {pokemonStats && (
        <div className="TeamStatsCard-stats">
          <div>HP: {pokemonStats.hp}</div>
          <div>Attack: {pokemonStats.attack}</div>
          <div>Defense: {pokemonStats.defense}</div>
          <div>Speed: {pokemonStats.speed}</div>
          <div>Special: {pokemonStats.special}</div>
          <div>Type: {pokemonStats.type.join(", ")}</div>
        </div>
      )}
      <button className="TeamStatsCard-remove-button" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}

export default TeamStatsCard;