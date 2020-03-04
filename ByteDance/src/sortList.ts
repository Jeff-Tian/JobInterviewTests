import { ListNode } from 'common/ListNode';

function insertBetween(node: ListNode, prev: ListNode, next: ListNode | null) {
  prev.next = node;
  node.next = next;
}

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
    [prev, current] = [current, current.next];
  }

  insertBetween(node, prev, current);

  return [prev.val === -Infinity ? node : start, current ? end : node];
};

const insert = (
  theNode: ListNode,
  sortedStart: ListNode,
  sortedEnd: ListNode
) => {
  let current: ListNode = sortedStart;
  let prev: ListNode | null = null;

  while (theNode.val > current.val) {
    prev = current;
    current = current.next!;

    if (current === sortedEnd) {
      sortedEnd.next = theNode;
    }
  }

  prev!.next = theNode;
  current.next = theNode.next;
  theNode.next = current;
};

export const sortList = (head: ListNode) => {
  let sortedStart: ListNode | null = null;
  let sortedEnd: ListNode | null = null;

  let current: ListNode | null = head;

  while (current) {
    if (sortedStart === null) {
      sortedStart = current;
      sortedEnd = current;

      current = current.next;
    } else {
      if (current.val < sortedStart.val) {
        const temp: ListNode | null = current.next;
        current.next = sortedStart;
        sortedStart = current;
        sortedEnd!.next = temp;

        current = sortedEnd!.next;
      } else {
        if (current.val < sortedEnd!.val) {
          insert(current, sortedStart, sortedEnd!);

          current = sortedEnd!.next;
        } else {
          sortedEnd = current;
        }
      }
    }
  }

  return sortedStart;
};
