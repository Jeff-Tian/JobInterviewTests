import { ListNode } from 'common/ListNode';

export const getIntersectionNode = (headA: ListNode | null, headB: ListNode | null) => {
    let [a, b] = [headA, headB];

    while (true) {
        if (a === b) {
            return a;
        }

        [a, b] = [a ? a.next : headB, b ? b.next : headA]
    }
}