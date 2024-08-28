import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleSubmit }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [frontUrl, setFrontUrl] = useState("");
  const [backUrl, setBackUrl] = useState("");

  function handleSubmission(e) {
    e.preventDefault();
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites: {
          front: frontUrl,
          back: backUrl,
        },
      }),
    })
      .then((r) => r.json())
      .then((newPokemon) => handleSubmit(newPokemon));
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmission}>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="pokemonName">Name</label>
            <input
              type="text"
              id="pokemonName"
              name="pokemonName"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              autocomplete="off"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="pokemonHp">HP</label>
            <input
              type="number"
              id="pokemonHp"
              name="pokemonHp"
              value={hp}
              placeholder="HP"
              onChange={(e) => setHp(e.target.value)}
              autocomplete="off"
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="pokemonFrontUrl">Front Image URL</label>
            <input
              type="text"
              id="pokemonFrontUrl"
              name="pokemonFrontUrl"
              value={frontUrl}
              placeholder="Front Image URL"
              onChange={(e) => setFrontUrl(e.target.value)}
              autocomplete="url"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="pokemonBackUrl">Back Image URL</label>
            <input
              type="text"
              id="pokemonBackUrl"
              name="pokemonBackUrl"
              value={backUrl}
              placeholder="Back Image URL"
              onChange={(e) => setBackUrl(e.target.value)}
              autocomplete="url"
            />
          </Form.Field>
        </Form.Group>
        <Form.Button type="submit">Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;