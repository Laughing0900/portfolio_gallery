import { useElementBounding, useWindowSize } from "@reactuses/core";
import { motion } from "framer-motion";
import { useRef } from "react";

import styles from "./SliderContainer.module.scss";

type SliderContainerProps = {
  y: number;
};
const items = [];
export const SliderContainer: React.FC<SliderContainerProps> = ({ y }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { height: SliderHeight } = useElementBounding(ref);

  const scrollY = y * (150 + 4);

  console.log({ SliderHeight, scrollY, y });
  return (
    <div className={styles.sliderContainer} ref={ref}>
      <motion.div className={styles.scrollable} style={{ y: -scrollY }}>
        {new Array(4).fill(0).map((value, idx) => (
          <div key={idx}></div>
        ))}
      </motion.div>
    </div>
  );
};
