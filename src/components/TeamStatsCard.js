import React from "react";
import newData from "./newData.json";

function TeamStatsCard({ pokemon, onRemove }) {
  const getPokemonStats = (pokemonName) => {
    const pokemonData = newData.pokemon.find(
      (p) => p.name.toLowerCase() === pokemonName.toLowerCase()
    );
    return pokemonData ? pokemonData : null;
  };

  const pokemonStats = getPokemonStats(pokemon.name);

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