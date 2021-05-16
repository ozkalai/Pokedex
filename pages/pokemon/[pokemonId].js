import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/PokemonDetail.module.scss";

function PokemonDetail() {
  const router = useRouter();
  const { pokemonId } = router.query;
  const [detail, setDetail] = useState(undefined);

  const fetchPokemondetail = async () => {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    let json = await response.json();
    console.log(json);
    setDetail(json);
  };

  useEffect(() => {
    if (pokemonId) {
      fetchPokemondetail();
    }
  }, [pokemonId]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles["detail-card"]}>
          <div className={styles["image-wrapper"]}>
            <img
              src={
                detail && detail.sprites.other["dream_world"]["front_default"]
              }
              alt=""
            />
          </div>
          <div className={styles.name}>
            <p>{detail && detail.name}</p>
          </div>
          <div className={styles.stats}>
            <h3>Stats</h3>
            <div className={styles.hp}>
              <h4>HP</h4>
              <p>{detail && detail.stats[0]["base_stat"]}</p>
            </div>
            <div className={styles.attack}>
              <h4>Attack</h4>
              <p>{detail && detail.stats[1]["base_stat"]}</p>
            </div>
            <div className={styles.defence}>
              <h4>Defence</h4>
              <p>{detail && detail.stats[2]["base_stat"]}</p>
            </div>
          </div>
          <div className={styles.abilities}>
            <h3 className={styles.title}>Abilities</h3>
            <p>{detail && detail.abilities[0].ability.name}</p>
            <p>{detail && detail.abilities[1].ability.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonDetail;
