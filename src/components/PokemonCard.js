import React, { useContext } from "react";
import { Card, Button } from "semantic-ui-react";
import { TeamContext } from "./TeamContext";

function PokemonCard({ pokemon }) {
  const { addToTeam } = useContext(TeamContext);

  function handleAddToTeam() {
    addToTeam(pokemon);
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img src={pokemon.sprites.front} alt={pokemon.name} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
          <Button onClick={handleAddToTeam}>Add to Team</Button>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;