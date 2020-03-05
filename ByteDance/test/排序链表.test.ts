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

testIt(sortList)(
  ListNode.fromArray([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  ListNode.fromArray([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1])
);

const a = new Array(10000).fill(0).map((_, i) => i)

testIt.only(sortList)(
  ListNode.fromArray(a),
  ListNode.fromArray(a.reverse())
);

testIt.only(sortList)(ListNode.fromArray([0, 0, 0]), ListNode.fromArray([0, 0, 0]))