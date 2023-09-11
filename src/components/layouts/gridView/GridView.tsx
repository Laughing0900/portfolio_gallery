import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

import { GridLayoutA } from "@/components/layouts/gridView/GridLayoutA";
import { CONTENT } from "@/lib/consts/contents";

export const GridView: React.FC<GridViewProps> = ({}) => {
  const { scrollYProgress } = useScroll();
  const view = useTransform(scrollYProgress, [0, 1], [0, CONTENT.length], {});
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("y changed to", latest);
  // });

  useMotionValueEvent(view, "change", (latest) => {
    // console.log("view changed to", latest.toFixed(0));
  });

  const activeView = Number(view.get().toFixed(0));

  const content = CONTENT[activeView];

  console.log({ activeView });

  if (activeView === 1) {
    return <GridLayoutA content={content} />;
  }
  if (activeView === 2) {
    return <GridLayoutA content={content} />;
  }
  if (activeView === 3) {
    return <GridLayoutA content={content} />;
  }
  return <GridLayoutA content={content} />;
};
