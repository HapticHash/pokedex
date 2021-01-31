import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setPokemon(request.data.results);
      return request;
    }
    fetchData();
  }, [url]);

  console.log(pokemon);
  return (
    <div className="row">
      {pokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          imageUrl={pokemon.url}
        />
      ))}
    </div>
  );
}

export default PokemonList;
