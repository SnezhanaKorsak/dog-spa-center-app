"use client";

import React, { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.scss";

type Props = {
  searchName: string;
  setSearchName: (searchName: string) => void;
  onSearch: () => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const InfoDogSearch: React.FC<Props> = ({
  searchName,
  setSearchName,
  onSearch,
  onKeyUp,
}) => {
  const onChangeSearchParameter = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.currentTarget.value);
  };

  return (
    <div className={styles.search}>
      <p className={styles.description}>
        Find information on the breed of dog that interests you
      </p>

      <div className={styles.searchInput}>
        <input
          className={styles.input}
          placeholder="Search"
          value={searchName}
          onChange={onChangeSearchParameter}
          onKeyUp={onKeyUp}
        />

        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.icon}
            onClick={onSearch}
          />
        </div>
      </div>
    </div>
  );
};
