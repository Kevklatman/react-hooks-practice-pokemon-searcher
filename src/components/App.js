import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PokemonPage from "./PokemonPage";
import Team from "./Team";
import { Container, Menu } from "semantic-ui-react";
import { TeamProvider } from "./TeamContext";

// ... rest of the code remains the same ...
function App() {
  return (
    <Router>
      <TeamProvider>
        <div>
          <Menu inverted>
            <Menu.Item as={Link} to="/">
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/team">
              Team
            </Menu.Item>
          </Menu>

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