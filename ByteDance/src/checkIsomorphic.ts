type Mapper = (i: any) => any;

const op = (method: string) => (arg1: any) => (arg2: any) => arg2[method](arg1);
const map = op('map');
const join = op('join');
const charCodeAt = op('charCodeAt');

const compose = (f: Function, g: Function) => (...x: any) => f(g(...x));
const curry = (fun: Function) => (arg1: any) => (arg2: any) => fun(arg1, arg2);

const arrayify = (...x: any[]) => x;

const by = (what: Function) => (mapper: Mapper) => compose(what, map(mapper));

const subtract = ([a, b]: number[]) => a - b;
const equal = ([a, b]: string[]) => a === b;

const charCodeAtFirstLetter = charCodeAt(0);

const subtractBy = compose(by(subtract)(charCodeAtFirstLetter), arrayify);

const mapString = (str: string) => (mapper: any) => map(mapper)([...str]);
const structure = (s: string) =>
  compose(join(''), mapString(s))(curry(subtractBy)(s));

export const checkIsomorphic = compose(by(equal)(structure), arrayify);
