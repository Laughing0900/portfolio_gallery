import { useElementBounding, useScroll } from "@reactuses/core";
import { useRef } from "react";

import { GridLayoutA } from "@/components/layouts/gridView/GridLayoutA";
import { GridLayoutB } from "@/components/layouts/gridView/GridLayoutB";
import { GridLayoutC } from "@/components/layouts/gridView/GridLayoutC";
import { GridLayoutD } from "@/components/layouts/gridView/GridLayoutD";
import { SliderContainer } from "@/components/slider/SliderContainer";
import { CONTENT } from "@/lib/consts/contents";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const [_x, y, isScrolling] = useScroll(ref);
  const { height } = useElementBounding(ref);
  const scrollY = (y / height) * (250 + 8);

  return (
    <main ref={ref}>
      <SliderContainer y={scrollY} />

      <GridLayoutA isScrolling={isScrolling} content={CONTENT[0]} />
      <GridLayoutB isScrolling={isScrolling} content={CONTENT[1]} />
      <GridLayoutC isScrolling={isScrolling} content={CONTENT[2]} />
      <GridLayoutD isScrolling={isScrolling} content={CONTENT[3]} />
    </main>
  );
}
