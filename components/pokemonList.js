import React from "react";
import Pokemon from "./pokemon";
import styles from "../styles/Home.module.css";

function PokemonList({ data }) {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Pokemon item={item} />
      ))}
    </div>
  );
}

export default PokemonList;
