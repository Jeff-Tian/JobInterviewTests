export const findLengthOfLCIS = (a: number[]) => {
  if (a.length === 0) {
    return 0;
  }

  let max = 0;

  const sa = a.slice(1).reduce(
    (sa: number[], next) => {
      if (next > sa[sa.length - 1]) {
        sa.push(next);
      } else {
        sa = [next];
      }

      max = Math.max(max, sa.length);

      return sa;
    },
    [a[0]]
  );

  return Math.max(max, sa.length);
};
