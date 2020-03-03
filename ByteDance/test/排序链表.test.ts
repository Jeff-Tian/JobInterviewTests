import { ListNode } from '../src/common/ListNode';
import { insertNodeIntoSortedList } from 'sortList';
// import { sortList } from 'sortList';

describe('插入一个节点到已经排好序的链表里', () => {
  let sorted = ListNode.fromArray([1, 2]);
  let head = sorted;
  let tail = head!.next;

  it('3 -> [1, 2] ==> [1, 2, 3]', () => {
    const [start, end] = insertNodeIntoSortedList(
      new ListNode(3),
      head!,
      tail!
    );
    expect(start.toString()).toEqual('1->2->3');
    expect(end.toString()).toEqual('3');
  });

  it.skip('0 -> [1, 2] ==> [0, 1, 2]', () => {
    const [start, end] = insertNodeIntoSortedList(
      new ListNode(0),
      head!,
      tail!
    );

    expect(start.toString()).toEqual('0->1->2');
    expect(end.toString()).toEqual('2');
  });
});

describe('排序链表', () => {
  // testIt(sortList)(
  //   ListNode.fromArray([1, 2, 3, 4]),
  //   ListNode.fromArray([4, 3, 2, 1])
  // );
  //
  // testIt(sortList)(
  //   ListNode.fromArray([1, 2, 3, 4]),
  //   ListNode.fromArray([4, 2, 1, 3])
  // );
  //
  // testIt(sortList)(
  //   ListNode.fromArray([-1, 0, 3, 4, 5]),
  //   ListNode.fromArray([-1, 5, 3, 4, 0])
  // );
});
