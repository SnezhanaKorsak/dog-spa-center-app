import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.scss";

export const InfoDogSearch = () => {
  return (
    <div className={styles.search}>
      <p className={styles.description}>
        Find information on the breed of dog that interests you
      </p>

      <div className={styles.searchInput}>
        <input type="search" className={styles.input} placeholder="Search" />
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};
