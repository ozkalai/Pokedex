import React, { useEffect } from "react";
import { useRouter } from "next/router";

function PokemonDetail() {
  const router = useRouter();
  const { pokemonId } = router.query;

  const fetchPokemonData = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const json = await response.json();
    console.log(json);
  };

  useEffect(() => {
    if (pokemonId) {
      fetchPokemonData();
    }
  }, [pokemonId]);

  return (
    <div>
      <h1>{pokemonId}</h1>
    </div>
  );
}

export default PokemonDetail;
