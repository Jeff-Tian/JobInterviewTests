import { findLengthOfLCIS } from '../src/findLengthOfLCIS';
import { testIt } from './helper';

describe('最长连续递增序列', () => {
  testIt(findLengthOfLCIS)(3, [1, 3, 5, 4, 7]);
  testIt(findLengthOfLCIS)(1, [2, 2, 2, 2, 2]);
  testIt(findLengthOfLCIS)(0, []);
  testIt(findLengthOfLCIS)(4, [1, 3, 5, 7]);
  testIt(findLengthOfLCIS)(1, [1]);
});
