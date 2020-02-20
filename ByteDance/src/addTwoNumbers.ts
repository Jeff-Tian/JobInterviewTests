import { ListNode } from 'common/ListNode';

export const addTwoNumbers = (l1: ListNode, l2: ListNode) => {
  const sum = new ListNode(0);
  let current = sum;

  let accumulated = 0;
  while (l1 || l2) {
    current.val = (l1?.val || 0) + (l2?.val || 0) + accumulated;

    if (current.val >= 10) {
      accumulated = 1;
      current.val = +current.val.toString()[1];
    } else {
      accumulated = 0;
    }

    if (l1?.next || l2?.next) {
      current.next = new ListNode(0);
      current = current.next;
    }

    l1 = l1?.next!;
    l2 = l2?.next!;
  }

  if (accumulated === 1) {
    current.next = new ListNode(accumulated);
  }

  return sum;
};
