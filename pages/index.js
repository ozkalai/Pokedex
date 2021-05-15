import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import PokemonList from "../components/pokemonList";
import styles from "../styles/Home.module.css";

export default function Home({ data, pokemon }) {
  console.log("pokemon", pokemon);

  const clickHandler = () => {
    console.log("hey");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pokedex</h2>
      <PokemonList pokemon={pokemon} />
      <button onClick={clickHandler} className={styles.load}>
        Load More
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await res.json();
  const { results = [] } = data;

  const pokemon = await Promise.all(
    results.map(async (result) => {
      const { url = [] } = result;
      const pokeResponse = await fetch(url);
      return await pokeResponse.json();
    })
  );
  return {
    props: {
      data,
      pokemon,
    },
  };
}
