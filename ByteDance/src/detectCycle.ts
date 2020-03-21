import { ListNode } from 'common/ListNode';

export const intersectCycle = (head: ListNode): ListNode | null => {
  let [tortoise, hare]: [ListNode | null, ListNode | null] = [head, head];

  while (tortoise && hare && hare.next) {
    [tortoise, hare] = [tortoise.next, hare.next.next];

    if (tortoise === hare) {
      return tortoise;
    }
  }

  return null;
};

export const detectCycle = (head: ListNode | null): ListNode | null => {
  if (head === null) {
    return null;
  }

  const meetingPoint = intersectCycle(head);

  if (!meetingPoint) {
    return null;
  }

  let [pt1, pt2] = [head!, meetingPoint!];

  while (pt1 !== pt2) {
    [pt1, pt2] = [pt1.next!, pt2.next!];
  }

  return pt1;
};
