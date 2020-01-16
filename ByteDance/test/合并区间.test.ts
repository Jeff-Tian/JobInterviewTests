import { testIt } from './helper';
import { merge } from '../src/merge';

describe('合并区间', () => {
  testIt(merge)(
    [
      [1, 6],
      [8, 10],
      [15, 18],
    ],
    [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]
  );
  testIt(merge)(
    [[1, 5]],
    [
      [1, 4],
      [4, 5],
    ]
  );
  testIt(merge)(
    [[0, 4]],
    [
      [1, 4],
      [0, 4],
    ]
  );
});
