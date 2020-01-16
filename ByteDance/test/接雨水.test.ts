import { testIt } from './helper';
import { trap } from '../src/trap';

describe('接雨水', () => {
  testIt(trap)(6, [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
  testIt(trap)(0, []);
});
