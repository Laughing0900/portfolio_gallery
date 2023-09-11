export const getX = (x: number, index: number) => {
  if (!x) return 0;
  const moveX = x * (10 + (index % 4) * 10);
  const value = moveX === 0 ? -moveX : moveX === 1 ? 0 : moveX;
  return value;
};

export const getY = (y: number, index: number) => {
  if (!y) return 0;
  const moveY = y * (10 + (index % 2) * 4);
  const value = moveY === 0 ? -moveY : moveY === 1 ? 0 : moveY;
  return value;
};
