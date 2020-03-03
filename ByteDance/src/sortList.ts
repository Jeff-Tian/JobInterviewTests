import { ListNode } from 'common/ListNode';

const insert = (
  theNode: ListNode,
  sortedStart: ListNode,
  sortedEnd: ListNode
) => {
  let current: ListNode = sortedStart;
  let last: ListNode | null = null;

  while (current && current !== sortedEnd && theNode.val > current.val) {
    last = current;
    current = current.next!;
  }

  current.next = theNode.next;
  theNode.next = current;
  last!.next = theNode;
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
