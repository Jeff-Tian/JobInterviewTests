export const memoize = (fn: Function) => (...args: any) => {
  const cache: any = {};
  const key = JSON.stringify(args);
  if (!cache[key]) {
    cache[key] = fn(...args);
  }

  return cache[key];
};

export const factorial = memoize((n: number): number => {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
});

export const getPermutations = (
  base: string,
  k: number = factorial(base.length)
) => {
  if (base.length <= 0) {
    return [];
  }

  if (base.length === 1) {
    return ['1'];
  }

  if (base.length === 2) {
    return [[base[0], base[1]].join(''), [base[1], base[0]].join('')];
  }

  let res: string[] = [];
  for (let i = 0; i < base.length; i++) {
    const sub = base.substr(0, i) + base.substr(i + 1);

    if (res.length >= k) {
      return res;
    }

    res = [...res, ...getPermutations(sub, k).map((e: string) => base[i] + e)];

    if (res.length >= k) {
      return res;
    }
  }

  return res;
};

export const getPermutationsOf = (base: string, k: number) =>
  getPermutations(base)[k - 1];

export const getPermutation = (n: number, k: number) => {
  if (n === 1 && k === 1) {
    return '1';
  }

  const base = new Array(n).fill(0);
  return getPermutationsOf(base.map((_, index) => index + 1).join(''), k);
};
