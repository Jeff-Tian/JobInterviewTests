type Mapper = (i: any) => any;

const op = (method: string) => (arg1: any) => (arg2: any) => arg2[method](arg1);
const map = op('map');
const join = op('join');
const charCodeAt = op('charCodeAt');

const compose = (...fns: Function[]) => (...x: any[]) =>
  fns.reduceRight((prev, next) => [next.apply(null, prev)], x)[0];

const curry = (f: Function) => (arg1: any) => (arg2: any) => f(arg1, arg2);

const arrayify = (...x: any[]) => x;
const pipe = (f: Function, g: Function, h: Function) => (a: any) => f(g)(h)(a);
const pipe2 = (f: Function, g: Function) => (a: any) => f(g)(a);

const by = (what: Function) => (mapper: Mapper) => compose(what, map(mapper));

const subtract = ([a, b]: number[]) => a - b;
const equal = ([a, b]: string[]) => a === b;

const charCodeAtFirstLetter = charCodeAt(0);

const temp = (op1: Function, op2: Function) =>
  compose(pipe(by, op1, op2), arrayify);

const subtractBy = temp(subtract, charCodeAtFirstLetter);

const mapString = (str: string) => (mapper: any) =>
  pipe2(map, mapper)([...str]);
const structure = (s: string) => {
  let v = pipe2(curry, subtractBy)(s);
  let f = compose(join(''), mapString(s));

  return f(v);
};

export const checkIsomorphic = temp(equal, structure);
