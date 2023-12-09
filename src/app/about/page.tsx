import { Tangerine } from "next/font/google";

import { ContentItem } from "@/components/content-item";
import { aboutUsContent } from "@/lib/data";

import styles from "./page.module.scss";

const tangerine = Tangerine({ weight: ["400", "700"], subsets: ["latin"] });

const AboutPage = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <h4 className={`${tangerine.className} ${styles.subtitle}`}>
        Our Owners Love Dogs and Cants Only
      </h4>

      {aboutUsContent.map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AboutPage;
