import { testIt } from './helper';
import { findCircleNum } from '../src/findCircleNum';

describe('朋友圈', () => {
  testIt(findCircleNum)(0, [[]]);
  testIt(findCircleNum)(1, [[1]]);
  testIt(findCircleNum)(1, [
    [1, 1],
    [1, 1],
  ]);
  testIt(findCircleNum)(2, [
    [1, 0],
    [0, 1],
  ]);

  testIt(findCircleNum)(1, [
    [1, 1],
    [1, 1],
  ]);

  testIt(findCircleNum)(1, [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]);

  testIt(findCircleNum)(2, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]);

  testIt(findCircleNum)(1, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ]);

  testIt(findCircleNum)(1, [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ]);

  testIt(findCircleNum)(2, [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ]);

  testIt(findCircleNum)(3, [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]);

  testIt(findCircleNum)(1, [
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
  ]);
});
