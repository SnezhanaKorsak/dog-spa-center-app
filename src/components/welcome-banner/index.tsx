import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.scss";

export const WelcomeBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.offer}>
        <p>Book your doggy spa day!</p>
        <Link href="/appointment" className={styles.link}>
          Book Appointment
        </Link>
      </div>
      <Image src="/images/dog.png" alt="about-image" width={500} height={500} />
    </div>
  );
};
