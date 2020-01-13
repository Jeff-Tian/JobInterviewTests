import { testIt } from './helper';
import { findKthLargest } from '../src/findKthLargest';

describe('数组中的第K个最大元素', () => {
  testIt(findKthLargest)(5, [3, 2, 1, 5, 6, 4], 2);
  testIt(findKthLargest)(
    10,
    [
      3,
      2,
      3,
      1,
      2,
      4,
      5,
      5,
      6,
      7,
      7,
      8,
      2,
      3,
      1,
      1,
      1,
      10,
      11,
      5,
      6,
      2,
      4,
      7,
      8,
      5,
      6,
    ],
    2
  );
});
