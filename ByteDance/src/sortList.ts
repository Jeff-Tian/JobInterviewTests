import { ListNode } from 'common/ListNode';
import assert from 'assert';

export const insertBetween = (
  node: ListNode,
  prev: ListNode,
  next: ListNode | null
) => {
  assert(next !== prev, new Error('next cannot be the same as prev!'));

  if (next && next.next === node) {
    next.next = null;
  }

  console.log(
    'inserting ',
    node.toString(),
    ' into [',
    prev.toString(),
    ', ',
    next ? next.toString() : null,
    ']'
  );
  prev.next = node;
  node.next = next;

  console.log(
    'inserted: [',
    prev.toString(),
    ', ',
    next ? next.toString() : null,
    ']'
  );
};

export const insertNodeIntoSortedList = (
  node: ListNode,
  start: ListNode,
  end: ListNode
) => {
  let [prev, current]: Array<ListNode | null> = [
    new ListNode(-Infinity),
    start,
  ];

  while (current && node.val > current.val) {
    console.log('before move: ', [prev.toString(), current.toString()]);
    [prev, current] = [current, current.next];
    console.log('after move: ', [
      prev.toString(),
      current ? current.toString() : null,
    ]);
  }

  insertBetween(node, prev, current);

  return [prev.val === -Infinity ? node : start, current ? end : node];
};

export const sortList = (head: ListNode) => {
  let [sortedStart, sortedEnd] = [head, head];

  while (sortedEnd.next) {
    [sortedStart, sortedEnd] = insertNodeIntoSortedList(
      sortedEnd.next,
      sortedStart,
      sortedEnd
    );
  }

  return sortedStart;
};
