type Mapper = (i: any) => any;

export const equalBy = (fn: Mapper) => (a: string, b: string) =>
  fn(a) === fn(b);
export const structure = (s: string) =>
  [...s].map((c: string) => s.indexOf(c)).join('');

export const isomorphic = equalBy(structure);
