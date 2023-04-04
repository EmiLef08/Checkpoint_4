import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  HomeOutline,
  HomeSharp,
  ImagesOutline,
  ImageSharp,
  PeopleOutline,
  PeopleSharp,
} from "react-ionicons";

import styles from "../styles/components/MobNavbar.module.scss";

export default function MobNavbar() {
  const location = useLocation();

  return (
    <div className={styles.mobnavbar}>
      <nav className={styles["nav-cont"]}>
        <ul className={styles.navul}>
          <li>
            <NavLink to="/">
              {location.pathname === "/" ? (
                <HomeSharp color="#ffffff" height="3rem" width="3rem" />
              ) : (
                <HomeOutline color="#ffffff" height="3rem" width="3rem" />
              )}
            </NavLink>
          </li>
          <li>
            {location.pathname === "/actions" ? (
              <ImageSharp color="#ffffff" height="3rem" width="3rem" />
            ) : (
              <ImagesOutline color="#ffffff" height="3rem" width="3rem" />
            )}
          </li>
          <li>
            {location.pathname === "/information" ? (
              <PeopleSharp color="#ffffff" height="3rem" width="3rem" />
            ) : (
              <PeopleOutline color="#ffffff" height="3rem" width="3rem" />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
