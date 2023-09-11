import { useMouse, useWindowSize } from "@reactuses/core";

export const useMouseMove = () => {
  if (typeof window === "undefined") {
    return { x: 0, y: 0 };
  }
  const { pageX, pageY } = useMouse();

  const { width, height } = useWindowSize();

  const x = (pageX ?? 0) / width - 0.5;
  const y = (pageY ?? 0) / height - 0.5;

  return { x, y };
};
