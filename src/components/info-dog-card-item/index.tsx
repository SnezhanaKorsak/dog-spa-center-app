import React from "react";
import Image from "next/image";

import { InfoDogType } from "@/types";
import styles from "./index.module.scss";

type Props = {
  info: InfoDogType;
};

export const InfoDogCardItem: React.FC<Props> = ({ info }) => {
  const {
    name,
    energy,
    good_with_other_dogs: goodWithOtherDogs,
    good_with_strangers: goodWithStrangers,
    min_life_expectancy: minLifeExpectancy,
    image_link: imageLink,
  } = info;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>Energy: {energy}</p>
        <p>Min life expectancy: {minLifeExpectancy}</p>
        <p>Good with strangers: {goodWithStrangers}</p>
        <p>Good with other dogs: {goodWithOtherDogs}</p>
      </div>

      <div>
        <Image src={imageLink} alt="info-dog-image" width={550} height={350} />
        <div className={styles.title}>{name}</div>
      </div>
    </div>
  );
};
