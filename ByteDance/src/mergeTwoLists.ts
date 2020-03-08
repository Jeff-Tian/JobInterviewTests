import { ListNode } from './common/ListNode';

export const mergeTwoLists = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let [cur1, cur2] = [l1, l2];
  let head = new ListNode(-Infinity);
  let cur = head;

  while (cur1 || cur2) {
    if (cur1 === null) {
      cur.next = cur2;
      break;
    }

    if (cur2 === null) {
      cur.next = cur1;
      break;
    }

    if (cur1.val < cur2.val) {
      cur.next = cur1;
      cur1 = cur1.next;
    } else {
      cur.next = cur2;
      cur2 = cur2.next;
    }
    cur = cur.next;
  }

  return head.next;
};
