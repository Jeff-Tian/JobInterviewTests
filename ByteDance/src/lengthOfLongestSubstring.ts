export const lengthOfLongestSubstring = (s: string) => {
  let maxCount = 0;
  const set = new Set();

  for (let i = 0, loop = 0; i < s.length && loop < s.length; i++) {
    const c = s[i];

    if (set.has(c)) {
      set.clear();
      i = loop++;
      continue;
    }

    set.add(c);

    if (set.size > maxCount) {
      maxCount = set.size;
    }
  }

  return maxCount;
};
