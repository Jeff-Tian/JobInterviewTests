import { sortList } from 'sortList';
import { testIt } from './helper';
import { ListNode } from 'common/ListNode';

testIt(sortList)(null, null);
testIt(sortList)(ListNode.fromArray([1]), ListNode.fromArray([1]));
testIt(sortList)(ListNode.fromArray([1, 2]), ListNode.fromArray([1, 2]));
testIt(sortList)(ListNode.fromArray([1, 2]), ListNode.fromArray([2, 1]));
testIt(sortList)(ListNode.fromArray([1, 2, 3]), ListNode.fromArray([1, 2, 3]));
testIt(sortList)(ListNode.fromArray([1, 2, 3]), ListNode.fromArray([1, 3, 2]));
testIt(sortList)(ListNode.fromArray([1, 2, 3]), ListNode.fromArray([2, 1, 3]));
testIt(sortList)(ListNode.fromArray([1, 2, 3]), ListNode.fromArray([2, 3, 1]));
testIt(sortList)(ListNode.fromArray([1, 2, 3]), ListNode.fromArray([3, 1, 2]));
testIt(sortList)(ListNode.fromArray([1, 2, 3]), ListNode.fromArray([3, 2, 1]));
testIt(sortList)(
  ListNode.fromArray([1, 2, 3, 4]),
  ListNode.fromArray([3, 2, 1, 4])
);
testIt(sortList)(
  ListNode.fromArray([1, 2, 3, 4]),
  ListNode.fromArray([4, 2, 1, 3])
);

testIt(sortList)(
  ListNode.fromArray([-1, 0, 3, 4, 5]),
  ListNode.fromArray([-1, 5, 3, 4, 0])
);
