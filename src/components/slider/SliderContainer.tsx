import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import { CONTENT } from "@/lib/consts/contents";

import styles from "./SliderContainer.module.scss";

type SliderContainerProps = {
  y?: number;
};
const distance = 258 * 3;
export const SliderContainer: React.FC<SliderContainerProps> = ({}) => {
  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <div className={styles.sliderContainer}>
      <motion.div className={styles.scrollable} style={{ x: scrollY }}>
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
