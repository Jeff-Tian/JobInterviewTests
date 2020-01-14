export const compose = (...fns: Function[]) => (...x: any[]) =>
  fns.reduceRight((prev, next) => [next.apply(null, prev)], x)[0];
