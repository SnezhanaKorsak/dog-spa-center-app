import React from "react";
import Image from "next/image";

import { PetProduct } from "@/types";
import styles from "./index.module.scss";

type Props = {
  product: PetProduct;
};

export const ProductItem: React.FC<Props> = ({ product }) => {
  const { image, description, collection, price } = product;
  const imageUrl = `/images/${image}.png`;

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={imageUrl}
        alt="product image"
        width={350}
        height={350}
      />

      <div className={styles.description}>
        <p>{description}</p>
        <p>{collection}</p>
      </div>

      <div className={styles.price}>{price}</div>
    </div>
  );
};
