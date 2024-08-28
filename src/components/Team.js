import React, { useContext } from "react";
import { TeamContext } from "./TeamContext";

function Team() {
  const { team, removeFromTeam } = useContext(TeamContext);

  const handleRemove = (pokemonId) => {
    removeFromTeam(pokemonId);
  };

  return (
    <div className="Team">
      <h1>My Team</h1>
      {team.map((pokemon) => (
        <div key={pokemon.id}>
          <img src={pokemon.sprites.front} alt={pokemon.name} />
          <div>{pokemon.name}</div>
          <button onClick={() => handleRemove(pokemon.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Team;