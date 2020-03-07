import { ListNode } from 'common/ListNode';
import { bubleSortList, sortListRecursively, swap, swapFirstTwoNodes, swapHeadAndNode, swapNeighbors } from 'sortList';
import { testIt } from './helper';

testIt(sortListRecursively)(null, null);
testIt(sortListRecursively)(ListNode.fromArray([1]), ListNode.fromArray([1]));
testIt(sortListRecursively)(ListNode.fromArray([1, 2]), ListNode.fromArray([1, 2]));
testIt(sortListRecursively)(ListNode.fromArray([1, 2]), ListNode.fromArray([2, 1]));
testIt(sortListRecursively)(ListNode.fromArray([1, 2, 3]), ListNode.fromArray([1, 2, 3]));
testIt(sortListRecursively)(ListNode.fromArray([1, 2, 3]), ListNode.fromArray([1, 3, 2]));
testIt(sortListRecursively)(ListNode.fromArray([1, 2, 3]), ListNode.fromArray([2, 1, 3]));
testIt(sortListRecursively)(ListNode.fromArray([1, 2, 3]), ListNode.fromArray([2, 3, 1]));
testIt(sortListRecursively)(ListNode.fromArray([1, 2, 3]), ListNode.fromArray([3, 1, 2]));
testIt(sortListRecursively)(ListNode.fromArray([1, 2, 3]), ListNode.fromArray([3, 2, 1]));
testIt(sortListRecursively)(
  ListNode.fromArray([1, 2, 3, 4]),
  ListNode.fromArray([3, 2, 1, 4])
);
testIt(sortListRecursively)(
  ListNode.fromArray([1, 2, 3, 4]),
  ListNode.fromArray([4, 2, 1, 3])
);

testIt(sortListRecursively)(
  ListNode.fromArray([-1, 0, 3, 4, 5]),
  ListNode.fromArray([-1, 5, 3, 4, 0])
);

testIt(sortListRecursively)(
  ListNode.fromArray([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  ListNode.fromArray([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1])
);

testIt(bubleSortList)(
  ListNode.fromArray([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  ListNode.fromArray([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1])
);


testIt(sortListRecursively)(
  ListNode.fromArray([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  ListNode.fromArray([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
);

testIt(bubleSortList)(
  ListNode.fromArray([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  ListNode.fromArray([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
);


const a = new Array(10000).fill(0).map((_, i) => i);

testIt(sortListRecursively)(ListNode.fromArray(a), ListNode.fromArray(a.reverse()));

testIt(sortListRecursively)(
  ListNode.fromArray([0, 0, 0]),
  ListNode.fromArray([0, 0, 0])
);

describe('swap', () => {
  it('swaps 2nd and tail', () => {
    const list = ListNode.fromArray([0, -1, 1, 2]);
    swap(list!, list!.next!, list!.next!.next!, list!.next!.next!.next!);
    expect(list!.toString()).toEqual('0->2->1->-1');
  })

  it('swaps head and tail', () => {
    const list = ListNode.fromArray([0, -1, 1]);
    const swapped = swapHeadAndNode(list!, list!.next!, list!.next!.next!);
    expect(swapped!.toString()).toEqual('1->-1->0');
  })

  it('swaps head and it\'s next', () => {
    const list = ListNode.fromArray([0, -1, 1]);
    const swapped = swapFirstTwoNodes(list!, list!.next!);
    expect(swapped!.toString()).toEqual('-1->0->1');
  })

  it('swaps neighbors', () => {
    const list = ListNode.fromArray([0, -1, 1]);
    swapNeighbors(list!, list!.next!, list!.next!.next!);
    expect(list!.toString()).toEqual('0->1->-1');
  })
})
