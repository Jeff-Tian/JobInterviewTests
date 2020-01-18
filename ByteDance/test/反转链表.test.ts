import { testIt } from './helper';
import { reverseList } from '../src/reverseList';
import { ListNode } from '../src/common/ListNode';

describe(' 反转链表', () => {
  testIt(reverseList)(null, null);
  testIt(reverseList)(ListNode.fromArray([1]), ListNode.fromArray([1]));
  testIt(reverseList)(ListNode.fromArray([2, 1]), ListNode.fromArray([1, 2]));
  testIt(reverseList)(
    ListNode.fromArray([3, 2, 1]),
    ListNode.fromArray([1, 2, 3])
  );
  testIt(reverseList)(
    ListNode.fromArray([5, 4, 3, 2, 1]),
    ListNode.fromArray([1, 2, 3, 4, 5])
  );
});
