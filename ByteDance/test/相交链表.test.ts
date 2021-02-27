import { ListNode } from 'common/ListNode';
import { nodeValueOf, testCases } from './helper';
import { getIntersectionNode } from 'getIntersectionNode';

describe('创建相交链表', () => {
  it('[4,1,8,4,5], [5,0,1,8,4,5], 2, 3', () => {
    const listA = [4, 1, 8, 4, 5],
      listB = [5, 0, 1, 8, 4, 5],
      skipA = 2,
      skipB = 3;

    const [a, b] = ListNode.createIntersectedLinks(listA, listB, skipA, skipB);
    expect(a.toString()).toEqual('4->1->8->4->5');
    expect(b.toString()).toEqual('5->0->1->8->4->5');
  });

  it('[0, 9, 1, 2, 4], [3, 2, 4], 3, 1', () => {
    const [a, b] = ListNode.createIntersectedLinks(
      [0, 9, 1, 2, 4],
      [3, 2, 4],
      3,
      1
    );
    expect(a.toString()).toEqual('0->9->1->2->4');
    expect(b.toString()).toEqual('3->2->4');
  });

  it('[2,6,4], [1,5], 3, 2', () => {
    const [a, b] = ListNode.createIntersectedLinks([2, 6, 4], [1, 5], 3, 2);
    expect(a.toString()).toEqual('2->6->4');
    expect(b.toString()).toEqual('1->5');
  });

  it('[2,1,3],[2,1,3],0,0', () => {
    const [a, b] = ListNode.createIntersectedLinks([2, 1, 3], [2, 1, 3], 0, 0);
    expect(a.toString()).toEqual('2->1->3');
    expect(b.toString()).toEqual('2->1->3');
    expect(a === b).toBe(true);
  });
});

testCases(nodeValueOf(getIntersectionNode))([
  {
    expected: 8,
    input: ListNode.createIntersectedLinks(
      [4, 1, 8, 4, 5],
      [5, 0, 1, 8, 4, 5],
      2,
      3
    ),
  },
  {
    expected: 2,
    input: ListNode.createIntersectedLinks([0, 9, 1, 2, 4], [3, 2, 4], 3, 1),
  },
  {
    expected: null,
    input: ListNode.createIntersectedLinks([2, 6, 4], [1, 5], 3, 2),
  },
  {
    expected: 2,
    input: ListNode.createIntersectedLinks([2, 1, 3], [2, 1, 3], 0, 0),
  },
  {
    expected: null,
    input: ListNode.createIntersectedLinks([1], [], 1, 0),
  },
]);
