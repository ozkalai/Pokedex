import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Pokemon.module.scss";

function Pokemon({ item }) {
  const [pokemon, setPokemon] = useState(undefined);

  const fetchPokemonData = async () => {
    const res = await fetch(item.url);
    const data = await res.json();
    console.log(item.name, data);
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  if (!pokemon) {
    return (
      <div className={styles.card}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <h3>{item.name}</h3>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles["image-wrapper"]}>
          <img
            className={styles["pokemon-img"]}
            src={pokemon.sprites["front_default"]}
            alt="Picture of the pokemon"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h3>
          <Link href={`/pokemon/${pokemon.id}`}>
            <a>{pokemon.name}</a>
          </Link>
        </h3>
        <div className={styles.types}>
          <p className={styles.title}>Types:</p>
          <div className={styles["all-types"]}>
            <p>{pokemon.types[0].type.name}</p>
            <p>
              {pokemon.types[1]
                ? pokemon.types[1].type.name
                : pokemon.types[0].type.name}
            </p>
          </div>
        </div>
        <div className={styles.body}>
          <p>Weight: {(pokemon.weight * 10) / 100}kgs</p>
          <p>Height:{(pokemon.height * 10) / 100}m</p>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
