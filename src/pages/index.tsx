import { useElementBounding, useWindowScroll } from "@reactuses/core";
import { useScroll as useReactScroll } from "@reactuses/core";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

import { GridLayoutA } from "@/components/layouts/gridView/GridLayoutA";
import { SliderContainer } from "@/components/slider/SliderContainer";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const [x, y] = useReactScroll(ref);
  const { height } = useElementBounding(ref);
  console.log({ y, height, current: y / height });
  return (
    <main ref={ref}>
      <SliderContainer y={y / height} />

      <GridLayoutA />
      <GridLayoutA />
      <GridLayoutA />
      <GridLayoutA />
    </main>
  );
}
