export const trap = (a: number[]) => {
  const maxHeight = Math.max(...a);
  const maxWidth = a.length;

  if (maxWidth <= 0) {
    return 0;
  }

  let floor: number[][] = Array.from(Array(maxHeight), () =>
    new Array(maxWidth).fill(-1)
  );

  for (let i = 0; i < maxWidth; i++) {
    if (a[i] > 0) {
      for (let j = maxHeight - 1; j >= maxHeight - a[i]; j--) {
        floor[j][i] = 1;

        let before = i - 1;
        while (floor[j][before] === -1 && before > 0) {
          before--;
        }

        if (floor[j][before] === 1) {
          for (let k = before + 1; k < i; k++) {
            floor[j][k] = 0;
          }
        }
      }
    }
  }

  return floor.reduce(
    (prev, next) => prev + next.filter(n => n === 0).length,
    0
  );
};
