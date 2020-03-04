import { ListNode } from 'common/ListNode';

const swap = (first: ListNode, second: ListNode) => {
  first.next = second.next;
  second.next = first;

  return second;
};

const insert = (node: ListNode, sortedList: ListNode) => {
  let [prev, next] = [sortedList, sortedList.next];

  if (node.val <= prev.val) {
    node.next = prev;

    return node;
  }

  while (next) {
    if (prev.val < node.val && node.val <= next.val) {
      prev.next = node;
      node.next = next;

      return sortedList;
    } else {
      [prev, next] = [prev.next!, next.next];
    }
  }

  prev.next = node;
  node.next = null;

  return sortedList;
};

export const sortList = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) {
    return head;
  }

  if (!head.next.next) {
    if (head.val > head.next.val) {
      return swap(head, head.next);
    } else {
      return head;
    }
  }

  return insert(head, sortList(head.next)!);
};
