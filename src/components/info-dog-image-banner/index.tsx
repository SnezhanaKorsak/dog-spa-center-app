import React from "react";
import Image from "next/image";

import styles from "./index.module.scss";

type Props = {
  title: string;
};

export const InfoDogImageBanner: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.container}>
      <Image
        src="https://api-ninjas.com/images/dogs/siberian_husky.jpg"
        alt="info-dog-image"
        width={550}
        height={350}
      />
      <div className={styles.title}>{title}</div>
    </div>
  );
};
