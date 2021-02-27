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

describe('支持对循环链表进行反转', () => {
  testIt(reverseList)(
    ListNode.createCycleLink([1], 0),
    ListNode.createCycleLink([1], 0)
  );

  const cycleWith2Nodes = ListNode.createCycleLink([2, 1], 0);

  it('反转2个节点的循环链表', () => {
    expect(ListNode.createCycleLink([1, 2], 0)!.toString()).toEqual(
      reverseList(cycleWith2Nodes, cycleWith2Nodes).toString()
    );
  });

  const cycleWith3Nodes = ListNode.createCycleLink([3, 2, 1], 0);
  it('反转3个节点的循环链表', () => {
    expect(ListNode.createCycleLink([1, 2, 3], 0)!.toString()).toEqual(
      reverseList(cycleWith3Nodes, cycleWith3Nodes)!.toString()
    );
  });
});
