import Image from "next/image";
import { Tangerine } from "next/font/google";

import { Navbar } from "@/components/navbar";

import styles from "./index.module.scss";

const tangerine = Tangerine({ weight: ["400", "700"], subsets: ["latin"] });

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="about-image"
            width={100}
            height={60}
          />
          <p className={`${tangerine.className} ${styles.logoFont}`}>
            Luxe Animal Spa
          </p>
        </div>
        <Navbar />
      </div>
      <div className={styles.promo}>
        Get 20% OFF When You Book A Spa Day For Your Animal Today!
      </div>
    </header>
  );
};
