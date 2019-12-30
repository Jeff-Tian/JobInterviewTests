export const threeSum = (nums: number[]): Array<number[]> => {
  let res: Array<number[]> = [];

  const sorted = nums.sort((x: number, y: number) => x - y);
  if (sorted[0] === 0 && sorted[nums.length - 1] === 0) {
    if (sorted.length >= 3) {
      return [[0, 0, 0]];
    } else {
      return [];
    }
  }

  for (let i = 1; i < sorted.length - 1; i++) {
    let left = 0;
    let right = sorted.length - 1;

    if (sorted[left] * sorted[right] >= 0) {
      break;
    }

    do {
      const sum = sorted[left] + sorted[i] + sorted[right];

      if (sum === 0) {
        res.push([sorted[left], sorted[i], sorted[right]]);
        left++;
        right--;
      }

      if (sum < 0) {
        left++;
      }

      if (sum > 0) {
        right--;
      }
    } while (left < i && i < right);
  }

  return Array.from(new Set(res.map(r => r.join(',')))).map(s =>
    s.split(',').map(r => Number(r))
  );

  // return res.reverse();
};
