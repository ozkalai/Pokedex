import React from "react";
import Pokemon from "./pokemon";
import styles from "../styles/Home.module.css";

function PokemonList({ pokemon }) {
  return (
    <div className={styles.container}>
      {pokemon.map((item) => (
        <Pokemon item={item} />
      ))}
    </div>
  );
}

export default PokemonList;
