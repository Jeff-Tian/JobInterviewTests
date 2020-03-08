import { testIt } from './helper';
import { mergeTwoLists } from '../src/mergeTwoLists';
import { ListNode } from '../src/common/ListNode';

describe('合并两个有序链表', () => {
  testIt(mergeTwoLists)(
    ListNode.fromArray([1, 1, 2, 3, 4, 4]),
    ListNode.fromArray([1, 2, 4]),
    ListNode.fromArray([1, 3, 4])
  );

  testIt(mergeTwoLists)(ListNode.fromArray([]), ListNode.fromArray([]), ListNode.fromArray([]));

  testIt(mergeTwoLists)(ListNode.fromArray([0]), ListNode.fromArray([]), ListNode.fromArray([0]));

  testIt(mergeTwoLists)(
    ListNode.fromArray([1, 2]),
    ListNode.fromArray([2]),
    ListNode.fromArray([1])
  );

  testIt(mergeTwoLists)(
    ListNode.fromArray([1, 2, 4, 5]),
    ListNode.fromArray([5]),
    ListNode.fromArray([1, 2, 4])
  );
});
