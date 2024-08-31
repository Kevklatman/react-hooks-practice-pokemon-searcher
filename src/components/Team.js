import React, { useContext } from "react";
import { TeamContext } from "./TeamContext";
import TeamStatsCard from "./TeamStatsCard";

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
          <TeamStatsCard
            key={pokemon.id}
            pokemon={pokemon}
            onRemove={() => handleRemove(pokemon.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;