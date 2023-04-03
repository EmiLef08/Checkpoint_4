import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ChevronBackCircle } from "react-ionicons";
import logo from "../assets/logo_leo.png";

import styles from "../styles/components/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles["div-logo"]}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <div className={styles["div-return"]}>
        <ChevronBackCircle color="#5A4037" height="2rem" width="2rem" />
      </div>
    </div>
  );
}
