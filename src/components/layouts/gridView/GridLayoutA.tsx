// import {
//   motion,
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
// } from "framer-motion";
import { useScroll } from "@reactuses/core";
import { useRef } from "react";

import style from "./GridLayoutA.module.scss";

type GridLayoutProps = {
  children?: React.ReactNode;
};

export const GridLayoutA: React.FC<GridLayoutProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [x, y] = useScroll(ref);
  // const y = useTransform(scrollY, [0, 1], [50, 500]);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page Y scroll: ", latest);
  // });

  return (
    <div id={style.grid_layout_a} ref={ref}>
      <div className={style.gridContainer}>
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
        <div></div> <div></div> <div></div> <div></div> <div></div>
        <div className={style.goBtn}>Go</div>
        <div className={style.goBtn}>Go</div>
        <div className={style.title}>
          <span>Title AAA here</span>
        </div>
        <div className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>

      {/* <div className={style.previewSlide}></div> */}
    </div>
  );
};
