import React, { createContext, useState } from "react";

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([]);

  const addToTeam = (pokemon) => {
    if (team.length < 5) {
      setTeam([...team, { ...pokemon, id: Date.now() }]);
    }
  };

  const removeFromTeam = (pokemonId) => {
    const updatedTeam = team.filter((pokemon) => pokemon.id !== pokemonId);
    setTeam(updatedTeam);
  };

  return (
    <TeamContext.Provider value={{ team, addToTeam, removeFromTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

export default { TeamProvider, TeamContext };