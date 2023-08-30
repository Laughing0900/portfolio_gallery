import { motion } from "framer-motion";

import { GridLayoutProps } from "@/components/layouts/gridView/type";
import { cn } from "@/lib/cn";
import { useMouseMove } from "@/lib/hooks/useMouseMove";

import style from "./GridLayoutA.module.scss";

export const GridLayoutA: React.FC<GridLayoutProps> = ({
  isScrolling,
  content,
}) => {
  const { images, title, description } = content;
  const { x, y } = useMouseMove();
  return (
    <div className={"grid_layout"}>
      <motion.div
        className={cn("gridContainer", style.gridContainer)}
        style={{ x: x * 20, y: y * 5 }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={cn("gridItem", style.gridItem)}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        ))}
        {/* <div className={"goBtn"}>Go</div>
        <div className={"goBtn"}>Go</div> */}
        <div className={cn("title", style.title)}>
          <span>{title}</span>
        </div>
        <div className={cn("description", style.description)}>
          {description}
        </div>
      </motion.div>
      <div className="overlay" style={{ opacity: isScrolling ? 1 : 0 }} />
    </div>
  );
};
