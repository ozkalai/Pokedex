import React from "react";
import Image from "next/image";
import styles from "../styles/Pokemon.module.scss";

function Pokemon({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles["image-wrapper"]}>
          <img
            className={styles["pokemon-img"]}
            src={item.sprites["front_default"]}
            alt="Picture of the pokemon"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h3>{item.name}</h3>
        <div className={styles.types}>
          <p className={styles.title}>Types:</p>
          <div className={styles["all-types"]}>
            <p>{item.types[0].type.name}</p>
            <p>
              {item.types[1]
                ? item.types[1].type.name
                : item.types[0].type.name}
            </p>
          </div>
        </div>
        <div className={styles.body}>
          <p>Weight: {(item.weight * 10) / 100}kgs</p>
          <p>Height:{(item.height * 10) / 100}m</p>
        </div>
        <p></p>
      </div>
    </div>
  );
}

export default Pokemon;
