import { cn } from "@/lib/cn";

import style from "./GridLayoutC.module.scss";

export const GridLayoutC: React.FC<GridLayoutProps> = ({
  isScrolling,
  content,
}) => {
  const { images, title, description } = content;
  return (
    <div className={"grid_layout"}>
      <div className={cn("gridContainer", style.gridContainer)}>
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
      </div>
      <div className="overlay" style={{ opacity: isScrolling ? 1 : 0 }} />
    </div>
  );
};
