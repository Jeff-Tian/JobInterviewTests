export const merge = (intervals: number[][]) => {
  return intervals
    .sort((prev, next) => prev[0] - next[0])
    .reduce((res: number[][], next: number[]) => {
      const prev = res[res.length - 1];

      if (prev && prev[1] >= next[0]) {
        prev[1] = Math.max(prev[1], next[1]);
      } else {
        res.push(next);
      }

      return res;
    }, []);
};
