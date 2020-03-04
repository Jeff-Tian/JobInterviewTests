import { ListNode } from '../src/common/ListNode';
import { insertBetween, insertNodeIntoSortedList, sortList } from 'sortList';
import { testIt } from './helper';

describe('insertBetween', () => {
  it('3 -> [1]', () => {
    let head = ListNode.fromArray([1]);
    let tail: ListNode | null = null;
    let node = new ListNode(3);

    insertBetween(node, head!, tail);

    expect(head!.toString()).toEqual('1->3');
    expect(tail).toBe(null);
  });

  it('1 -> [-Infinity, 2->1]', () => {
    let head = new ListNode(-Infinity);
    let tail = ListNode.fromArray([2, 1]);
    let node = tail!.next;

    insertBetween(node!, head!, tail!);

    expect(head!.toString()).toEqual('-Infinity->1->2');
    expect(tail!.toString()).toEqual('2');
  });
});

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

  it('5 -> [6] ==> [5, 6]', () => {
    let head = ListNode.fromArray([6]);
    const [start, end] = insertNodeIntoSortedList(
      new ListNode(5),
      head!,
      head!
    );
    expect(start.toString()).toEqual('5->6');
    expect(end.toString()).toEqual('6');
  });

  it('6 -> [5] ==> [5, 6]', () => {
    let head = ListNode.fromArray([5]);
    const [start, end] = insertNodeIntoSortedList(
      new ListNode(6),
      head!,
      head!
    );

    expect(start.toString()).toEqual('5->6');
    expect(end.toString()).toEqual('6');
  });

  it('[1] -> [2] ==> [1, 2]', () => {
    let head = ListNode.fromArray([2, 1]);
    let node = head!.next!;

    const [start, end] = insertNodeIntoSortedList(node, head!, head!);

    expect(start.toString()).toEqual('1->2');
    expect(end.toString()).toEqual('2');
  });
});

describe('排序链表', () => {
  testIt(sortList)(ListNode.fromArray([1]), ListNode.fromArray([1]));
  testIt.skip(sortList)(ListNode.fromArray([1, 2]), ListNode.fromArray([2, 1]));

  testIt.skip(sortList)(
    ListNode.fromArray([1, 2, 3, 4]),
    ListNode.fromArray([4, 3, 2, 1])
  );
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
