export const longestConsecutive = (nums: number[]) => {
  let max = 0;
  let current = 0;

  if (nums.length === 0) {
    return 0;
  }

  nums
    .sort((x, y) => x - y)
    .slice(1)
    .reduce((prev, next) => {
      if (next - prev === 1) {
        current++;
      } else if (next - prev > 1) {
        current = 0;
      }

      if (current > max) {
        max = current;
      }
      return next;
    }, nums[0]);

  return max + 1;
};
