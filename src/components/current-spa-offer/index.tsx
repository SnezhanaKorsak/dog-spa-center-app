import Image from "next/image";

import styles from "./index.module.scss";
import { Modal } from "@/components/modal";

export const CurrentSpaOffer = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="/images/spa-offer.png"
        alt="spa-offer image"
        width={400}
        height={400}
      />

      <div className={styles.content}>
        <h1>Doggy Facial and Fur Cleanse Treatment</h1>

        <div className={styles.description}>
          Dogs receive a facial with our vegan, cruelty free face products and
          cleansing of any dirt left hiding in their beautiful fur (comes with a
          take home face products and animal treats).
        </div>
      </div>

      <Modal />
    </div>
  );
};
