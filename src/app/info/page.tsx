import React from "react";
import { InfoDogSearch } from "@/components/info-dog-search";
import { InfoDogImageBanner } from "@/components/info-dog-image-banner";

import styles from "./page.module.scss";

const InfoDogPage = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>INFO DOG</h1>

      <InfoDogSearch />
      <InfoDogImageBanner title="Siberian Husky" />

      <div className={styles.info}>
        <p>Energy: </p>
        <p>Min life expectancy: </p>
        <p>Good with strangers: </p>
        <p>Good with other dogs: </p>
      </div>
    </div>
  );
};

export default InfoDogPage;
