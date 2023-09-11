import {
  m as motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/cn";
import { useMouseMove } from "@/lib/hooks/useMouseMove";

import style from "./GridLayoutA.module.scss";

export const GridLayoutA: React.FC<GridLayoutProps> = ({ content }) => {
  const { images, title, description } = content;
  const { x, y } = useMouseMove();

  const getX = (index: number) => {
    const moveX = x * (25 + index * 3);
    const value = moveX === 0 ? -moveX : moveX === 1 ? 0 : moveX;
    return value;
  };

  const getY = (index: number) => {
    const moveY = y * (25 + index * 2);
    const value = moveY === 0 ? -moveY : moveY === 1 ? 0 : moveY;
    return value;
  };

  // console.log({ x, y });

  return (
    <div className={"grid_layout"}>
      <motion.div className={cn("gridContainer", style.gridContainer)}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={cn("gridItem", style.gridItem)}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              transform: `translateX(${getX(index)}px) translateY(${getY(
                index,
              )}px) translateZ(0)`,
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
    </div>
  );
};
