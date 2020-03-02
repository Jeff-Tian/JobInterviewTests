import { testIt } from './helper';
import { ListNode } from '../src/common/ListNode';
import { sortList } from 'sortList';

describe('排序链表', () => {
  testIt(sortList)(
    ListNode.fromArray([1, 2, 3, 4]),
    ListNode.fromArray([4, 3, 2, 1])
  );

  testIt(sortList)(
    ListNode.fromArray([1, 2, 3, 4]),
    ListNode.fromArray([4, 2, 1, 3])
  );

  testIt(sortList)(
    ListNode.fromArray([-1, 0, 3, 4, 5]),
    ListNode.fromArray([-1, 5, 3, 4, 0])
  );
});
