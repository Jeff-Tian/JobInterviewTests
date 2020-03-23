import { testIt, nodeValueOf } from './helper';
import { ListNode } from 'common/ListNode';
import { detectCycle } from 'detectCycle';

describe('环形链表 II', () => {
  const systemUnderTest = nodeValueOf(detectCycle);

  testIt(systemUnderTest)(2, ListNode.createCycleLink([3, 2, 0, -4], 1));
  testIt(systemUnderTest)(1, ListNode.createCycleLink([1, 2], 0));
  testIt(systemUnderTest)(null, ListNode.createCycleLink([1], -1));
  testIt(systemUnderTest)(null, ListNode.createCycleLink([], -1));
  testIt(systemUnderTest)(
    21,
    ListNode.createCycleLink(
      [
        -21,
        10,
        17,
        8,
        4,
        26,
        5,
        35,
        33,
        -7,
        -16,
        27,
        -12,
        6,
        29,
        -12,
        5,
        9,
        20,
        14,
        14,
        2,
        13,
        -24,
        21,
        23,
        -21,
        5,
      ],
      24
    )
  );
});
