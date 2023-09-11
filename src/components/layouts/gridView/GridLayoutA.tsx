import {
  m as motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

import { getX, getY } from "@/components/layouts/gridView/getMouseEffect";
import { cn } from "@/lib/cn";
import { useMouseMove } from "@/lib/hooks/useMouseMove";

import style from "./GridLayoutA.module.scss";

export const GridLayoutA: React.FC<GridLayoutProps> = ({ content }) => {
  const { images, title, description } = content;
  const { x, y } = useMouseMove();

  return (
    <div className={"grid_layout"}>
      <div className={cn("gridContainer", style.gridContainer)}>
        {images.map((image, index) => (
          <div
            key={index}
            className={cn("gridItem", style.gridItem)}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: `${50 + getY(y, index)}% ${
                50 + getX(x, index)
              }%`,
              backgroundSize: "cover",
              transform: `translateX(${getX(x, index)}px) translateY(${getY(
                y,
                index,
              )}px) `,
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
      </div>
    </div>
  );
};
