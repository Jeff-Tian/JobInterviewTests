import { ListNode } from 'common/ListNode';

export const insertNodeIntoSortedList = (
  node: ListNode,
  start: ListNode,
  end: ListNode
) => {
  let current = start;
  let prev = current;

  while (current !== end) {
    if (current.val <= node.val) {
      prev = current;
      current = current.next!;
    } else {
      prev.next = node;
      node.next = current;

      return { start, end };
    }
  }

  if (current.val <= node.val) {
    end.next = node;
    end = node;
  } else {
    prev.next = node;
    node.next = current;
  }

  return { start, end };
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
