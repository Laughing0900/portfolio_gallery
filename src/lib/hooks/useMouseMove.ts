import { useMouse, useWindowSize } from "@reactuses/core";

export const useMouseMove = () => {
  const { pageX, pageY } = useMouse();

  const { width, height } = useWindowSize();

  const x = pageX / width - 0.5;
  const y = pageY / height - 0.5;

  return { x: x, y: y };
};
