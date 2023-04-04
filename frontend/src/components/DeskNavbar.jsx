import React from "react";
import { NavLink, Link } from "react-router-dom";

import styles from "../styles/components/DeskNavbar.module.scss";

import logo from "../assets/logo_leo.png";

export default function DeskNavbar() {
  return (
    <nav className={styles.contnav}>
      <Link to="/" className={styles.logonav}>
        <img src={logo} alt="logo" className={styles.logohead} />
      </Link>
      <div className={styles.navlink}>
        <ul>
          <li className={styles.Link}>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className={styles.Link}>
            <NavLink to="/actions">Nos Actions</NavLink>
          </li>
          <li className={styles.Link}>
            <NavLink to="/information">Nos LEOs</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
