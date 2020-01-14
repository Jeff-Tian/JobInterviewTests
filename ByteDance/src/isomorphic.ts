import { compose } from './helpers/compose';

type Mapper = (i: any) => any;

Object.defineProperty(String.prototype, 'equals', {
  value: function(another: string) {
    return this === another;
  },
});

const op3 = (method: string) => ([a, b]: any) => a[method](b);

const mapOver = op3('map');
const equalOver = op3('equals');
const op = (method: string) => (target: any) => (args: any) =>
  target[method](args);
const join = (fn: Mapper) => op('join')(fn)('');

const apply2 = (fn: Mapper) => (args: any[]) => args.map(fn);
const equalBy = (func: Mapper) => (a: string, b: string) =>
  equalOver(apply2(func)([a, b]));

const indices = op('indexOf');
const toArray = (s: string) => [...s];
const apply = (...fns: Mapper[]) => (arg: any) =>
  mapOver([fns, (fn: Mapper) => fn(arg)]);
export const structureOf = compose(join, mapOver, apply(toArray, indices));

export const isomorphic = equalBy(structureOf);
