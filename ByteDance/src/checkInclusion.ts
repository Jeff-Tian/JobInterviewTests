export const checkInclusion = (s1: string, s2: string) => {
  const permutations = getPermutations(s1);
  for (let p of Array.from(permutations)) {
    if (s2.indexOf(p) >= 0) {
      return true;
    }
  }

  return false;
};

export const getPermutations = (s: string): Set<string> => {
  if (s.length === 1) {
    return new Set([s]);
  }

  const res = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    let permutations = getPermutations(s.substr(0, i) + s.substr(i + 1));
    permutations.forEach(p => res.add(s[i] + p));
  }

  return res;
};

export const factorial = (n: number): number => {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

let firstPart: string[] = [];
const secondPart: string[] = [];

export const getOrders = (s: string): any => {
  for (let i = 0; i < s.length; i++) {
    firstPart.push(s[i]);
    secondPart.push(s.substr(0, i) + s.substr(i + 1));
  }

  const tmp = [];
  for (let i = 0; i < secondPart.length; i++) {
    const line = secondPart[i];

    for (let j = 0; j < line.length; j++) {
      tmp.push(firstPart[i] + line[j]);
    }
  }
  firstPart = tmp;

  for (let i = 0; i < firstPart.length; i++) {
    firstPart[i] += subtract(s, firstPart[i]);
  }

  return firstPart;
};

export const subtract = (s1: string, s2: string) => {
  let res = '';

  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) < 0) {
      res += s1[i];
    }
  }

  return res;
};
