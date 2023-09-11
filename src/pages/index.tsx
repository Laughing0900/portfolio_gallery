import { GridView } from "@/components/layouts/gridView/GridView";
import { SliderContainer } from "@/components/slider/SliderContainer";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <main>
      <SliderContainer />

      <div className={styles.imageViewContainer}>
        <GridView />
      </div>
    </main>
  );
}
