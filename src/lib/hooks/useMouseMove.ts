import { useMouse, useWindowSize } from "@reactuses/core";

export const useMouseMove = () => {
  const { pageX, pageY } = useMouse();
  const { width, height } = useWindowSize();
  if (typeof window === "undefined") {
    return { x: 0, y: 0 };
  }
  const x = (pageX ?? 0) / width - 0.5;
  const y = (pageY ?? 0) / height - 0.5;

  return { x, y };
};
