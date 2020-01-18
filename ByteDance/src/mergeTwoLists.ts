import { ListNode, toArray } from './common/ListNode';

export const mergeTwoLists = (l1: ListNode, l2: ListNode): number[] => {
  return toArray(l1)
    .concat(toArray(l2))
    .sort((x, y) => x - y);
};
