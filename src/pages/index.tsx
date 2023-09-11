import { useScroll } from "@reactuses/core";
import { useRef } from "react";

import { GridView } from "@/components/layouts/gridView/GridView";
import { SliderContainer } from "@/components/slider/SliderContainer";
import { CONTENT } from "@/lib/consts/contents";

import style from "./index.module.scss";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const [_x, _y, isScrolling] = useScroll(ref);
  console.log({ isScrolling });

  return (
    <main ref={ref}>
      <SliderContainer />

      {CONTENT.map(({ title }, idx) => {
        return (
          <div
            className={style.mainContainer}
            key={idx}
            // style={{ opacity: isScrolling ? 1 : 0 }}
          >
            {title}
          </div>
        );
      })}
      <div className={style.imageViewContainer}>
        <GridView />
      </div>
    </main>
  );
}
