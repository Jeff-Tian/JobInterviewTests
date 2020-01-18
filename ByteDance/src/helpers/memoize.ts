export const memoize = (fn: Function) => (...args: any) => {
  const cache: any = {};
  const key = JSON.stringify(args);
  if (!cache[key]) {
    cache[key] = fn(...args);
  }

  return cache[key];
};
