import { ListNode, toArray } from './common/ListNode';

export const mergeTwoLists = (
  l1: ListNode,
  l2: ListNode
): Array<number | string> => {
  return toArray(l1)
    .concat(toArray(l2))
    .sort((x, y) => {
      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    });
};
