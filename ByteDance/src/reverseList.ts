import { memoized } from 'helpers/memoize';
import { IListNode } from './common/ListNode';

export const reverseList = memoized(
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
