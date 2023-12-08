import React from "react";

import { SpaService } from "@/types";

import styles from "./index.module.scss";

type Props = {
  service: SpaService;
};

export const ServicesItem: React.FC<Props> = ({ service }) => {
  const { serviceName, price, description } = service;

  const formattedDescription = description.split("\n").map((item, index) => {
    return (
      <p key={index} className={styles.description}>
        {item}
      </p>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>{serviceName}</div>
      <div className={styles.price}>{price}</div>
      <div>{formattedDescription}</div>
    </div>
  );
};
