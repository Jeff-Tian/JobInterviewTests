import { testIt } from './helper';
import { longestConsecutive } from '../src/longestConsecutive';

describe('最长连续序列', () => {
  testIt(longestConsecutive)(4, [100, 4, 200, 1, 3, 2]);
  testIt(longestConsecutive)(0, []);
  testIt(longestConsecutive)(3, [1, 2, 0, 1]);
  testIt(longestConsecutive)(1, [0, 0]);
});
