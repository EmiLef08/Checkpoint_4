import React from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
// import axios from "axios";
import { LogoFacebook, LogoInstagram } from "react-ionicons";
import Dijon from "../assets/Dijon.jpeg";
import banques from "../assets/banques_2.jpg";
import cabaret from "../assets/Cabaret_2.png";
import cnl from "../assets/cnl_vannes_2.jpg";

import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  // const [photos, setPhotos] = useState([]);
  // const [popularPhotos, setPopularPhotos] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/photos`)
  //     .then((res) => {
  //       setPhotos(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  // const handleRandomize = () => {
  //   const popularPhotosArr = [];

  //   while (popularPhotosArr.length < 4) {
  //     const randomIndex = Math.floor(Math.random() * photos.length);
  //     if (!popularPhotosArr.includes(randomIndex)) {
  //       popularPhotosArr.push(randomIndex);
  //     }

  //     setPopularPhotos(popularPhotos);
  //   }
  // };

  // useEffect(() => {
  //   handleRandomize();
  // }, [photos]);

  const handleClick = () => {
    navigate("/information");
  };

  const handleClickActions = () => {
    navigate("/actions");
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
        <img src={cabaret} alt="Cabaret Vert" />
        <img src={banques} alt="Banques Alimentaires" />
        <img src={cnl} alt="Convention Nationale LEO Vannes" />
      </div>
      <div className={styles["home-btn"]}>
        <button
          type="button"
          className={styles["btn-actions"]}
          onClick={handleClickActions}
        >
          NOS ACTIONS
        </button>
      </div>
      <div className={styles["home-contact"]}>
        <div className={styles.reseaux}>
          <a href="https://www.facebook.com/LeoClubReims">
            <LogoFacebook color="#ffffff" height="3rem" width="3rem" />
          </a>
          <h2>Suivez-nous sur nos réseaux !</h2>
          <a href="https://www.instagram.com/leoclubreims/">
            <LogoInstagram color="#ffffff" height="3rem" width="3rem" />
          </a>
        </div>
        <div className={styles.contact}>
          <div className={styles.form}>
            <h2>Nous contacter ?</h2>
            <form className={styles["contact-form"]}>
              <label htmlFor="name" className={styles["label-contact"]}>
                Nom et prénom :
                <input
                  className={styles["input-contact"]}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nom et prénom"
                  required
                />
              </label>
              <label htmlFor="email" className={styles["label-contact"]}>
                Email :
                <input
                  className={styles["input-contact"]}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </label>
              <label htmlFor="téléphone" className={styles["label-contact"]}>
                Téléphone :
                <input
                  className={styles["input-contact"]}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Téléphone"
                  required
                />
              </label>
              <label htmlFor="sujet" className={styles["label-contact"]}>
                Sujet :
              </label>
              <select
                name="sujet"
                id="sujet"
                className={styles["subject-contact"]}
              >
                <option selected>Sélectionnez l'objet de votre message</option>
                <option value="member">Devenir membre</option>
                <option value="actions">Partenariat pour une action</option>
                <option value="information">Demande d'information</option>
                <option value="other">Autre sujet</option>
              </select>
              <label htmlFor="message" className={styles["label-contact"]}>
                Message :
                <textarea
                  className={styles["message-contact"]}
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  required
                />
              </label>
              <button type="submit" className={styles["btn-contact"]}>
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
