"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Cinzel_Decorative } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

import styles from "./index.module.scss";

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "700"],
  subsets: ["latin"],
});

export const Modal = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActiveModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsActiveModal(false);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    closeModal();
  };

  if (!isActiveModal) {
    return false;
  }

  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={faXmark}
        className={styles.icon}
        onClick={closeModal}
      />
      <div className={styles.content}>
        <h1 className={cinzelDecorative.className}>
          Sign UP TO BARK NEWSLETTER
        </h1>
        <div className={styles.subtitle}>
          Get 10% Off Your First Spa Treatment{" "}
        </div>

        <form onSubmit={onSubmitHandler}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={styles.input}
          />
          <button className={styles.btn}>Sign Up</button>
        </form>

        <div className={styles.description}>
          *By completing this form you are signing up to receive our emails and
          can unsubscribe at any time.
        </div>
      </div>

      <Image
        className={styles.image}
        src="/images/animals.png"
        alt="animals image"
        width={450}
        height={375}
      />
    </div>
  );
};
