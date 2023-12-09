"use client";

import React, { useState } from "react";

import { ProductItem } from "@/components/product-item";

import { PetProduct } from "@/types";
import styles from "./index.module.scss";

type Props = {
  title: string;
  products: PetProduct[];
};

export const Products: React.FC<Props> = ({ products, title }) => {
  const [itemsCount, setItemsCount] = useState(3);

  const onClickHandler = () => setItemsCount(products.length);

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.images}>
        {[...products].splice(0, itemsCount).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <button className={styles.btn} onClick={onClickHandler}>
        {`See more ${title}`}
      </button>
    </div>
  );
};
