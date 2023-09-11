import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState } from "react";

import { CONTENT } from "@/lib/consts/contents";

import styles from "./SliderContainer.module.scss";

type SliderContainerProps = {
  y?: number;
};
const distance = 258 * 3;
export const SliderContainer: React.FC<SliderContainerProps> = ({}) => {
  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const [isScrolling, setIsScrolling] = useState(false);

  useMotionValueEvent(scrollY, "change", () => {
    setIsScrolling(true);
  });

  const handleSelectView = () => {
    setIsScrolling(false);
  };

  return (
    <>
      <motion.div
        style={{ opacity: isScrolling ? 1 : 0 }}
        className={styles.mainContainer}
      >
        {CONTENT.map(({ title }, idx) => {
          return (
            <div className={styles.mainTitle} key={idx}>
              {title}
              <span className={styles.ctaBtn}>Click to View</span>
            </div>
          );
        })}
        <div className={styles.overlay}></div>
      </motion.div>

      <motion.div
        className={styles.sliderContainer}
        style={{
          scale: isScrolling ? 1.5 : 1,
          y: isScrolling ? "-50%" : 0,
        }}
      >
        <motion.div
          className={styles.scrollable}
          style={{
            x: scrollY,
          }}
        >
          {CONTENT.map(({ images }, idx) => (
            <div
              key={idx}
              style={{
                backgroundImage: `url(${images[0]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={handleSelectView}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};
