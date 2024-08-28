import React, { useContext } from "react";
import { TeamContext } from "./TeamContext";
import { Card } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";

function Team() {
  const { team } = useContext(TeamContext);

  return (
    <div>
      <h1>Team</h1>
      <Card.Group itemsPerRow={6}>
        {team.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Card.Group>
    </div>
  );
}

export default Team;