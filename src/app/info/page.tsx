import React from "react";
import { InfoDog } from "@/components/info-dog";

import styles from "./page.module.scss";

const InfoDogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>INFO DOG</h1>

      <InfoDog />
    </div>
  );
};

export default InfoDogPage;
