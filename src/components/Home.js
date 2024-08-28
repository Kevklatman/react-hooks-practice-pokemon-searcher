import React, { useState, useEffect } from "react";
import { Container, Header, Card, Image, Input, Button } from "semantic-ui-react";
import axios from "axios";

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
      setPokemon(response.data.results);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePokemonClick = (pokemonName) => {
    if (selectedPokemon.length < 5 && !selectedPokemon.includes(pokemonName)) {
      setSelectedPokemon([...selectedPokemon, pokemonName]);
    }
  };

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Header as="h1">Pokemon Team Builder</Header>
      <Input
        placeholder="Search Pokemon..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <Card.Group itemsPerRow={5}>
        {filteredPokemon.map((p) => (
          <Card key={p.name} onClick={() => handlePokemonClick(p.name)}>
            <Image src={`https://img.pokemondb.net/artwork/${p.name}.jpg`} />
            <Card.Content>
              <Card.Header>{p.name}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Header as="h3">Selected Pokemon:</Header>
      <ul>
        {selectedPokemon.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <Button
        disabled={selectedPokemon.length === 0}
        onClick={() => setSelectedPokemon([])}
      >
        Clear Team
      </Button>
    </Container>
  );
}

export default Home;