import { ListNode } from '../src/common/ListNode';
import { insertNodeIntoSortedList } from 'sortList';
// import { sortList } from 'sortList';

describe('插入一个节点到已经排好序的链表里', () => {
  it('3 -> [1, 2] ==> [1, 2, 3]', () => {
    let head = ListNode.fromArray([1, 2]);
    let tail = head!.next;

    const [start, end] = insertNodeIntoSortedList(
      new ListNode(3),
      head!,
      tail!
    );
    expect(start.toString()).toEqual('1->2->3');
    expect(end.toString()).toEqual('3');
  });

  it('0 -> [1, 2] ==> [0, 1, 2]', () => {
    let head = ListNode.fromArray([1, 2]);
    let tail = head!.next;

    const [start, end] = insertNodeIntoSortedList(
      new ListNode(0),
      head!,
      tail!
    );

    expect(start.toString()).toEqual('0->1->2');
    expect(end.toString()).toEqual('2');
  });

  it('1.5 -> [1, 2] ==> [1, 1.5, 2]', () => {
    let head = ListNode.fromArray([1, 2]);
    let tail = head!.next;

    const [start, end] = insertNodeIntoSortedList(
      new ListNode(1.5),
      head!,
      tail!
    );

    expect(start.toString()).toEqual('1->1.5->2');
    expect(end.toString()).toEqual('2');
  });

  it('5 -> [1, 2, 3, 4, 6, 7, 8, 9, 10] ==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    let head = ListNode.fromArray([1, 2, 3, 4, 6, 7, 8, 9, 10]);
    let tail = head!.next!.next!.next!.next!.next!.next!.next!.next!;

    const [start, end] = insertNodeIntoSortedList(
      new ListNode(5),
      head!,
      tail!
    );

    expect(start.toString()).toEqual('1->2->3->4->5->6->7->8->9->10');
    expect(end.toString()).toEqual('10');
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
