import { memoized } from 'helpers/memoize';
import { IListNode } from './common/ListNode';

export const reverseList = memoized(
  (head: IListNode | null, cycleStart?: IListNode | null): IListNode | null => {
    if (!head) {
      return null;
    }

    if (head.next === null || head.next === head) {
      return head;
    }

    if (head.next === cycleStart) {
      return head;
    }

    const rev = reverseList(head.next, cycleStart);

    head.next!.next = head;
    if (!cycleStart) {
      head.next = null;
    } else {
      head.next = rev;
    }

    return rev;
  }
);
