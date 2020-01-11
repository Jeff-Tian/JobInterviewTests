type Mapper = (i: any) => any;

const map = (func: Mapper) => (...target: any[]) => target.map(func);
const compose = (f: Function, g: Function) => (...x: any) => f(g(...x));

const by = (what: Function) => (mapper: Mapper) => compose(what, map(mapper));

const subtract = ([a, b]: number[]) => a - b;
const equal = ([a, b]: string[]) => a === b;

const charCodeAt = (i: number) => (s: string) => s.charCodeAt(i);
const charCodeAtFirstLetter = charCodeAt(0);
const higherOrderSubtractBy = (s: string) => (i: string) =>
  by(subtract)(charCodeAtFirstLetter)(i, s);
const mapString = (str: string) => (mapper: any) => map(mapper)(...str);
const join = (a: any[], sep: string) => a.join(sep);
const joinDirectly = (a: any[]) => join(a, '');
const structure = (s: string) =>
  compose(joinDirectly, mapString(s))(higherOrderSubtractBy(s));

export const checkIsomorphic = by(equal)(structure);
