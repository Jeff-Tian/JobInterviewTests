import { checkInclusion, equals, getAmount } from '../src/checkInclusion';
import { testIt } from './helper';

describe('字符串的排列', () => {
  testIt(checkInclusion)(true, 'ab', 'eidbaooo');
  testIt(checkInclusion)(false, 'ab', 'eidboaoo');
  testIt(checkInclusion)(true, 'ab', 'ab');
  testIt(checkInclusion)(true, 'a', 'a');
  testIt(checkInclusion)(true, '', '');
  testIt(checkInclusion)(false, 'ab', '');
  testIt(checkInclusion)(true, 'adc', 'dcda');
  testIt(checkInclusion)(true, 'abc', 'cccccbabbbaaaa');
  testIt(checkInclusion)(
    false,
    'dinitrophenylhydrazine',
    'acetylphenylhydrazine'
  );
});

describe('get Amount', () => {
  testIt(getAmount)({ a: 2, b: 1 }, 'aab');
});

describe('equals', () => {
  testIt(equals)(true, { a: 2, b: 1 }, { a: 2, b: 1 });
  testIt(equals)(false, { a: 2, b: 1 }, { a: 2, b: 1, c: 1 });
});
