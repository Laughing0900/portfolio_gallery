import { useMotionValueEvent, useScroll } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

import { CONTENT } from "@/lib/consts/contents";

const GridLayoutA = dynamic(
  () =>
    import("@/components/layouts/gridView/GridLayoutA").then(
      (mod) => mod.GridLayoutA,
    ),
  {
    ssr: false,
  },
);
const GridLayoutB = dynamic(
  () =>
    import("@/components/layouts/gridView/GridLayoutB").then(
      (mod) => mod.GridLayoutB,
    ),
  {
    ssr: false,
  },
);
const GridLayoutC = dynamic(
  () =>
    import("@/components/layouts/gridView/GridLayoutC").then(
      (mod) => mod.GridLayoutC,
    ),
  {
    ssr: false,
  },
);
const GridLayoutD = dynamic(
  () =>
    import("@/components/layouts/gridView/GridLayoutD").then(
      (mod) => mod.GridLayoutD,
    ),
  {
    ssr: false,
  },
);

export const GridView: React.FC<GridViewProps> = ({}) => {
  const { scrollYProgress } = useScroll();
  const [view, setView] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) return setView(0);
    if (latest < 0.5) return setView(1);
    if (latest < 0.75) return setView(2);
    if (latest < 1) return setView(3);
  });

  const content = CONTENT[view];
  if (view === 0) {
    return <GridLayoutA content={content} />;
  }
  if (view === 1) {
    return <GridLayoutB content={content} />;
  }
  if (view === 2) {
    return <GridLayoutC content={content} />;
  }
  if (view === 3) {
    return <GridLayoutD content={content} />;
  }
};
