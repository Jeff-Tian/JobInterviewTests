import { testIt } from './helper';
import {
  factorial,
  getPermutation,
  getPermutations,
  getPermutationsOf,
} from '../src/getPermutation';

describe('阶乘', () => {
  testIt(factorial)(1, 1);
  testIt(factorial)(2, 2);
  testIt(factorial)(6, 3);
});

describe('第k个排列', () => {
  testIt(getPermutation)('1', 1, 1);
  testIt(getPermutation)('12', 2, 1);
  testIt(getPermutation)('21', 2, 2);
  testIt(getPermutation)('123', 3, 1);
  testIt(getPermutation)('132', 3, 2);
});

describe('全排列', () => {
  testIt(getPermutations)(['12', '21'], '12');
  testIt(getPermutationsOf)('123', '123', 1);
  testIt(getPermutationsOf)('132', '123', 2);
  testIt(getPermutations)(['123', '132', '213', '231', '312', '321'], '123');
});
