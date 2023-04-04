import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import Dijon from "../assets/Dijon.jpeg";

import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [popularPhotos, setPopularPhotos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/photos`)
      .then((res) => {
        setPhotos(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleRandomize = () => {
    const popularPhotosArr = [];

    while (popularPhotosArr.length < 3) {
      const randomIndex = Math.floor(Math.random() * photos.length);
      if (!popularPhotosArr.includes(randomIndex)) {
        popularPhotosArr.push(randomIndex);
      }

      setPopularPhotos(popularPhotos);
    }
  };

  useEffect(() => {
    handleRandomize();
  }, [photos]);
  const handleClick = () => {
    navigate("/information");
  };

  return (
    <div className={styles.home}>
      <div className={styles["home-pict"]}>
        <img src={Dijon} alt="dijon_picture" />
      </div>
      <div className={styles["home-title"]}>
        <h1>LEO Club Reims Fleur de Lys</h1>
      </div>
      <div className={styles["home-text"]}>
        <p>
          Nous sommes une assoication qui rassemble des jeunes entre 18 et 30
          ans pour réaliser des actions afin de rendre le monde meilleur à notre
          échelle. Parrainés par le LIONS Club, nous agisons pour
          l'environnement, la jeunesse, la lutte contre la faim, et d'autres
          actions qui nous tiennent à cœur. Nos membres viennent de tout horizon
          : des étudiants, des jeunes travailleurs. L'envie d'aider notre
          prochain est la clé de notre motivation.
        </p>
      </div>
      <div className={styles["home-btn"]}>
        <button
          type="button"
          className={styles["btn-a-propos"]}
          onClick={handleClick}
        >
          EN SAVOIR +
        </button>
      </div>
      <div className={styles["home-img"]}>
        <img src={Dijon} alt="dijon_picture" />
      </div>
    </div>
  );
}
