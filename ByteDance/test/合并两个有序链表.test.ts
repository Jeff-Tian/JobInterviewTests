import { testIt } from './helper';
import { mergeTwoLists } from '../src/mergeTwoLists';
import { ListNode } from '../src/common/ListNode';

describe('合并两个有序链表', () => {
  testIt(mergeTwoLists)(
    ListNode.fromArray([1, 1, 2, 3, 4, 4]),
    ListNode.fromArray([1, 2, 4]),
    ListNode.fromArray([1, 3, 4])
  );

  testIt(mergeTwoLists)(
    ListNode.fromArray([]),
    ListNode.fromArray([]),
    ListNode.fromArray([])
  );

  testIt(mergeTwoLists)(
    ListNode.fromArray([0]),
    ListNode.fromArray([]),
    ListNode.fromArray([0])
  );

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

  testIt(mergeTwoLists)(ListNode.fromArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]),
    ListNode.fromArray([13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]),
    ListNode.fromArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
});
