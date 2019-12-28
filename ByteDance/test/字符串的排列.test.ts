import { checkInclusion, equals, getAmount } from '../src/checkInclusion';

const testIt = (func?: Function) => (
  expectedResult:
    | boolean
    | string
    | string[]
    | Set<string>
    | number
    | { [key: string]: number },
  ...args: (string | number | any)[]
) =>
  it(args.join(' ') + '--> ' + expectedResult, () => {
    let actual = (func || checkInclusion).apply(null, args);
    expect(actual).toEqual(expectedResult);
  });

describe('字符串的排列', () => {
  testIt()(true, 'ab', 'eidbaooo');
  testIt()(false, 'ab', 'eidboaoo');
  testIt()(true, 'ab', 'ab');
  testIt()(true, 'a', 'a');
  testIt()(true, '', '');
  testIt()(false, 'ab', '');
  testIt()(true, 'adc', 'dcda');
  testIt()(true, 'abc', 'cccccbabbbaaaa');
  testIt()(false, 'dinitrophenylhydrazine', 'acetylphenylhydrazine');
});

describe('get Amount', () => {
  testIt(getAmount)({ a: 2, b: 1 }, 'aab');
});

describe('equals', () => {
  testIt(equals)(true, { a: 2, b: 1 }, { a: 2, b: 1 });
  testIt(equals)(false, { a: 2, b: 1 }, { a: 2, b: 1, c: 1 });
});
