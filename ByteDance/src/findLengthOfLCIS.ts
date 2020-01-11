export const findLengthOfLCIS = (a: number[]) => {
  let sa = [a[0]];
  let max = 0;

  a.slice(1).forEach(i => {
    if (i > sa[sa.length - 1]) {
      sa.push(i);
    } else {
      if (sa.length > max) {
        max = sa.length;
      }

      sa = [];
    }
  });

  return max;
};
