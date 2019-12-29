export const reverseWords = (s: string) => {
  return s
    .split(' ')
    .filter(s => s.length > 0)
    .reverse()
    .join(' ');
};
