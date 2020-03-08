import { ListNode } from 'common/ListNode';

export const swapFirstTwoNodes = (node1: ListNode, node2: ListNode) => {
  node1.next = node2.next;
  node2.next = node1;

  return node2;
};

const insert = (node: ListNode, sortedList: ListNode) => {
  let [prev, next] = [sortedList, sortedList.next];

  if (node.val <= prev.val) {
    node.next = prev;

    return node;
  }

  while (next && !(prev.val < node.val && node.val <= next.val)) {
    [prev, next] = [prev.next!, next.next];
  }

  prev.next = node;
  node.next = next;

  return sortedList;
};

export const sortListRecursively = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) {
    return head;
  }

  if (!head.next.next) {
    if (head.val < head.next.val) {
      return head;
    } else {
      return swapFirstTwoNodes(head, head.next);
    }
  }

  return insert(head, sortListRecursively(head.next)!);
};

/**
 *
 * @param head
 * @param node1
 * @param node2
 *
 * Original:
 * head -> ... -> prev1 -> node1 -> ... -> prev2 -> node2 -> ...
 *
 * Will point prev1 to node2:
 * head -> ... -> prev1 -x node1 -> ... -> prev2 -> node2 -> ...
 *
 * Pointed prev1 to node2:
 *                  +---------------------------------+
 *                  |                                 ↓
 * head -> ... -> prev1    node1 -> ... -> prev2 -> node2 -> ...
 *
 * Remember node1's next:
 *                  +---------------------------------+
 *                  |                                 ↓
 * head -> ... -> prev1    node1 -> ... -> prev2 -> node2 -> ...
 *                                   ↑
 *                         original node1's next
 *
 * Point node1 to node2's next:
 *                  +-------------------------------+
 *                  |                               ↓
 * head -> ... -> prev1   node1    ... -> prev2 -> node2 -> ...
 *                         |        ↑                        ↑
 *                         | original node1's next           |
 *                         +---------------------------------+
 *
 * Point node2 to original node1's next:
 *                  +--------------------------------+
 *                  |                                ↓
 * head -> ... -> prev1   node1    ... -> prev2 -> node2    ...
 *                         |        ↑                |       ↑
 *                         |        +----------------+       |
 *                         +---------------------------------+
 *
 * Point prev2 to node1:
 *                  +--------------------------------+
 *                  |      +----------------+        |
 *                  |      ↓                |        ↓
 * head -> ... -> prev1   node1    ... -> prev2    node2    ...
 *                         |        ↑                |       ↑
 *                         |        +----------------+       |
 *                         +---------------------------------+
 *
 * That is:
 * head -> ... -> prev1 -> node2 -> ... -> prev2 -> node1 -> ...
 *
 */
export const swap = (
  prev1: ListNode,
  node1: ListNode,
  prev2: ListNode,
  node2: ListNode
): void => {
  prev1.next = node2;
  const originalNode1Next = node1.next;
  node1.next = node2.next;
  node2.next = originalNode1Next;
  prev2.next = node1;
};

export const swapHeadAndNode = (
  head: ListNode,
  prev: ListNode,
  node: ListNode
): ListNode => {
  const artificialHead = new ListNode(-Infinity);
  artificialHead.next = head;

  swap(artificialHead, head, prev, node);

  return artificialHead.next;
};

export const swapNeighbors = (
  prev: ListNode,
  node1: ListNode,
  node2: ListNode
): void => {
  node1.next = node2.next;
  node2.next = node1;

  prev.next = node2;
};

export const bubleSortList = (list: ListNode) => {
  const assistNode = new ListNode(-Infinity);
  assistNode.next = list;

  let [prev1, node1]: Array<ListNode | null> = [assistNode, list];

  while (node1?.next) {
    let [prev2, node2]: Array<ListNode | null> = [node1, node1.next];

    while (node2) {
      if (node1.val > node2.val) {
        if (node1.next === node2) {
          swapNeighbors(prev1, node1, node2);
          prev2 = node2;
        } else {
          swap(prev1, node1, prev2, node2);
        }

        const tmp: ListNode | null = node1;
        node1 = node2;
        node2 = tmp;
      }

      [prev2, node2] = [prev2?.next!, node2?.next];
    }

    [prev1, node1] = [prev1.next!, node1.next];
  }

  return assistNode.next;
};

export const getListLength = (head: ListNode | null): number => {
  let count = 0;
  let current: ListNode | null = head;

  while (current) {
    count++;

    current = current.next
  }

  return count;
}

export const getMiddleNode = (head: ListNode | null): ListNode | null => {
  if (head === null || head.next === null) {
    return head;
  }

  let [slow, fast]: [ListNode, ListNode | null] = [head, head.next];

  while (fast && fast.next) {
    [slow, fast] = [slow.next!, fast.next.next];
  }

  return slow;
}

export const mergeSortList = (list: ListNode) => {
  return list;
}