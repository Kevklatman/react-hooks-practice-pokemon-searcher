import React, { useContext } from "react";
import { TeamContext } from "./TeamContext";

function Team() {
  const { team, removeFromTeam } = useContext(TeamContext);

  const handleRemove = (pokemonId) => {
    removeFromTeam(pokemonId);
  };

  return (
    <div className="Team">
      <h1 className="Team-title">My Team</h1>
      <div className="Team-pokemon-list">
        {team.map((pokemon) => (
          <div key={pokemon.id} className="Team-pokemon-card">
            <img
              src={pokemon.sprites.front}
              alt={pokemon.name}
              className="Team-pokemon-image"
            />
            <div className="Team-pokemon-name">{pokemon.name}</div>
            <button
              className="Team-remove-button"
              onClick={() => handleRemove(pokemon.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;