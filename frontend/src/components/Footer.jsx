import React from "react";
import { Link } from "react-router-dom";
import { LogoFacebook, LogoInstagram } from "react-ionicons";

import styles from "../styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontai}>
        <div className={styles.copy}>
          <p>© LEO Club Reims Fleur de Lys</p>
        </div>
        <div className={styles.footerlogo}>
          <a href="https://www.facebook.com/LeoClubReims">
            <LogoFacebook color="#ffffff" height="3rem" width="3rem" />
          </a>
          <a href="https://www.instagram.com/leoclubreims/">
            <LogoInstagram color="#ffffff" height="3rem" width="3rem" />
          </a>
        </div>
        <div className={styles.footerlinks}>
          <Link to="/">A propos</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Accès membre</Link>
        </div>
      </div>
    </footer>
  );
}
