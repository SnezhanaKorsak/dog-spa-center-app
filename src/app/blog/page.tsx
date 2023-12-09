import { Tangerine } from "next/font/google";

import { ContentItem } from "@/components/content-item";
import { blogs } from "@/lib/data";

import styles from "./page.module.scss";

const tangerine = Tangerine({ weight: ["400", "700"], subsets: ["latin"] });

const BlogPage = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Bark Chronicles</h1>
      <h4 className={`${tangerine.className} ${styles.subtitle}`}>
        Where To Read All About The Bark
      </h4>

      {blogs.map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default BlogPage;
