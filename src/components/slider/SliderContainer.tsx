import { motion } from "framer-motion";

import { CONTENT } from "@/lib/consts/contents";

import styles from "./SliderContainer.module.scss";

type SliderContainerProps = {
  y: number;
};

export const SliderContainer: React.FC<SliderContainerProps> = ({ y }) => {
  return (
    <div className={styles.sliderContainer}>
      <motion.div className={styles.scrollable} style={{ x: -y }}>
        {CONTENT.map(({ images }, idx) => (
          <div
            key={idx}
            style={{
              backgroundImage: `url(${images[0]})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        ))}
      </motion.div>
    </div>
  );
};
