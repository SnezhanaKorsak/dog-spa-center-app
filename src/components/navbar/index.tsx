"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { headerNavLinks } from "@/constants";

import styles from "./index.module.scss";

export const Navbar = () => {
  const pathname = usePathname();

  const getClassName = (path: string) =>
    `${styles.link} ${path === pathname ? styles.active : ""}`;

  return (
    <div className={styles.container}>
      {headerNavLinks.map(({ path, title }) => (
        <Link className={getClassName(path)} key={path} href={path}>
          {title}
        </Link>
      ))}
    </div>
  );
};
