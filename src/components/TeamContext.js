import React, { createContext, useState } from "react";

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([]);

  const addToTeam = (pokemon) => {
    if (team.length < 5) {
      setTeam([...team, pokemon]);
    }
  };

  return (
    <TeamContext.Provider value={{ team, addToTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

export default TeamProvider