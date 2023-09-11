import { Roboto_Mono } from "next/font/google";

import { GridView } from "@/components/layouts/gridView/GridView";
import { SliderContainer } from "@/components/slider/SliderContainer";

import styles from "./index.module.scss";

const font = Roboto_Mono({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={font.className}>
      <SliderContainer />

      <div className={styles.imageViewContainer}>
        <GridView />
      </div>
    </main>
  );
}
