import { IListNode } from './common/ListNode';
import { memoize } from './helpers/memoize';

export const reverseList = memoize(
  (head: IListNode | null): IListNode | null => {
    if (!head) {
      return null;
    }

    if (head.next === null) {
      return head;
    }

    const rev = reverseList(head.next);

    head.next!.next = head;
    head.next = null;

    return rev;
  }
);
