import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import PokemonList from "../components/pokemonList";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const [results, setResults] = useState([]);
  const [next, setNext] = useState(undefined);

  useEffect(() => {
    if (data && data.results) {
      setResults(data.results);
    }
    if (data && data.next) {
      setNext(data.next);
    }
  }, [data]);

  const fetchMore = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
    if (json && json.results) {
      setResults((prev) => [...prev, ...json.results]);
    }
    if (json && json.next) {
      setNext(json.next);
    } else {
      setNext(undefined);
    }
  };

  const clickHandler = () => {
    if (next) {
      fetchMore(next);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pokedex</h2>
      <PokemonList data={results} />
      <button onClick={clickHandler} className={styles.load}>
        Load More
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
