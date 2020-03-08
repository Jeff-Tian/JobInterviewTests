import { ListNode, toArray } from './common/ListNode';

export const mergeTwoLists = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  return ListNode.fromArray(toArray(l1)
    .concat(toArray(l2))
    .sort((x, y) => {
      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    }));
};
