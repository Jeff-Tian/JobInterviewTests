type Mapper = (input: string) => string;

export const equalBy = (fn: Mapper) => (...s: string[]) =>
  new Set(s.map(fn)).size === 1;
export const structure = (s: string) =>
  [...s].map((c: string) => s.indexOf(c)).join('');

export const isomorphic = equalBy(structure);
