import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonPage from "./PokemonPage";
import Team from "./Team";
import Menu from "./Menu";
import { Container } from "semantic-ui-react";
import { TeamProvider } from "./TeamContext";

function App() {
  return (
    <Router>
      <TeamProvider>
        <div>
          <Menu />
          <Container>
            <Routes>
              <Route exact path="/" element={<PokemonPage />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </Container>
        </div>
      </TeamProvider>
    </Router>
  );
}

export default App;