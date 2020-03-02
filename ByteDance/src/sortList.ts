import { ListNode } from 'common/ListNode';

const insert = (list: ListNode | null, node: ListNode) => {
  if (!list) {
    return node;
  }

  let prev: ListNode | null = null;
  let next: ListNode | null = list;

  while (next && node.val > next.val) {
    prev = next;
    next = next.next;
  }

  node.next = next;

  if (prev) {
    prev.next = node;
    return list;
  } else {
    return node;
  }
};

export const sortList = (head: ListNode) => {
  let sorted: ListNode | null = null;
  let cur: ListNode | null = head;

  while (cur) {
    const newNode = new ListNode(cur.val);
    sorted = insert(sorted, newNode);

    cur = cur.next;
  }

  console.log('sroted = ', sorted?.toString());
  return sorted;
};
