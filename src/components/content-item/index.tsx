import React from "react";
import Image from "next/image";

import { ContentItemType } from "@/types";
import styles from "./index.module.scss";

type Props = {
  item: ContentItemType;
};

export const ContentItem: React.FC<Props> = ({ item }) => {
  const { title, text, imageUrl } = item;
  const imageSrc = `/images/${imageUrl}.png`;

  const formattedText = text.split("\n");

  return (
    <div className={styles.container}>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <Image
          className={styles.image}
          src={imageSrc}
          alt="product image"
          width={450}
          height={450}
        />
      </div>

      <div className={styles.description}>
        {formattedText.map((item: string) => (
          <p className={styles.paragraph}>{item}</p>
        ))}
      </div>
    </div>
  );
};
