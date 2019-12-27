import {
  checkInclusion,
  factorial,
  getOrders,
  getPermutations,
  subtract,
} from '../src/checkInclusion';

const testIt = (func?: Function) => (
  expectedResult: boolean | string | string[] | Set<string> | number,
  ...args: (string | number)[]
) =>
  it(args.join(' '), () => {
    let actual = (func || checkInclusion).apply(null, args);
    expect(actual).toEqual(expectedResult);
  });

describe.skip('字符串的排列', () => {
  testIt()(true, 'ab', 'eidbaooo');
  testIt()(false, 'ab', 'eidboaoo');
  testIt()(true, 'ab', 'ab');
  testIt()(false, '', '');
  testIt()(false, 'ab', '');
  testIt()(true, 'adc', 'dcda');
  testIt()(true, 'abc', 'cccccbabbbaaaa');
  testIt()(true, 'dinitrophenylhydrazine', 'acetylphenylhydrazine');
});

describe('permutations', () => {
  testIt(getPermutations)(new Set(['ba', 'ab']), 'ba');
  testIt(getPermutations)(new Set([]), '');
  testIt(getPermutations)(new Set(['a']), 'a');
  testIt(getPermutations)(
    new Set(['abc', 'bac', 'cba', 'acb', 'bca', 'cab']),
    'abc'
  );
});

describe('factorial', () => {
  testIt(factorial)(1, 1);
  testIt(factorial)(2, 2);
  testIt(factorial)(6, 3);
});

describe('getOrders', () => {
  testIt(getOrders)(['123', '132', '213', '231', '312', '321'], '123');
});

describe('subtract', () => {
  testIt(subtract)('1', '123', '23');
});
