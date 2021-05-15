import React from "react";
import Image from "next/image";
import styles from "../styles/Pokemon.module.scss";

function Pokemon() {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles["image-wrapper"]}>
          <img
            className={styles["pokemon-img"]}
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Picture of the pokemon"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h3>bulbasaur</h3>
        <div className={styles.types}>
          <p>Types:</p>
          <p>Grass</p>
          <p>Poision</p>
        </div>
        <div className={styles.body}>
          <p>Weight: 6.9 kgs</p>
          <p>Height: 0.7m</p>
        </div>
        <p></p>
      </div>
    </div>
  );
}

export default Pokemon;
