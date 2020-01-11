import { testIt } from './helper';
import { search } from '../src/search';

describe('搜索旋转排序数组', () => {
  testIt(search)(4, [4, 5, 6, 7, 0, 1, 2], 0);
  testIt(search)(0, [4, 5, 6, 7, 0, 1, 2], 4);
  testIt(search)(0, [0, 1, 2, 4, 5, 6, 7], 0);
  testIt(search)(-1, [4, 5, 6, 7, 0, 1, 2], 3);
  testIt(search)(0, [1], 1);
  testIt(search)(0, [1, 3], 1);
  testIt(search)(2, [4, 5, 1, 2, 3], 1);
  testIt(search)(3, [7, 8, 1, 2, 3, 4, 5, 6], 2);
  testIt(search)(1, [5, 1, 2, 3, 4], 1);
  testIt(search)(1, [8, 9, 2, 3, 4], 9);
  testIt(search)(1, [4, 5, 6, 7, 0, 1, 2], 5);
  testIt(search)(6, [8, 1, 2, 3, 4, 5, 6, 7], 6);
});
