import React from "react";

import { ServicesItem } from "@/components/spa-cervices-list/service-item";

import { SpaService } from "@/types";
import styles from "./index.module.scss";

type Props = {
  services: SpaService[];
};

export const SpaServicesList: React.FC<Props> = ({ services }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Spa Services</div>
      <div className={styles.divider} />

      {services &&
        services?.map((service) => (
          <ServicesItem key={service.id} service={service} />
        ))}
    </div>
  );
};
