export const checkIsomorphic = (s1: string, s2: string) => {
  if (s1.length !== s2.length) {
    return false;
  }

  const serials1 = [];
  const serials2 = [];

  for (let i = 0; i < s1.length; i++) {
    serials1.push(s1.charCodeAt(i) - s1.charCodeAt(0));
  }

  for (let i = 0; i < s2.length; i++) {
    serials2.push(s2.charCodeAt(i) - s2.charCodeAt(0));
  }

  for (let i = 0; i < serials1.length; i++) {
    if (serials1[i] !== serials2[i]) {
      return false;
    }
  }

  return true;
};
