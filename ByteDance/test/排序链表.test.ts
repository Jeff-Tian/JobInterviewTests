import { ListNode } from 'common/ListNode';
import {
  bubleSortList,
  sortListRecursively,
  swap,
  swapFirstTwoNodes,
  swapHeadAndNode,
  swapNeighbors,
  getListLength,
  getMiddleNode,
  mergeSortList,
  mergeSortListAsync,
  mergeSortListPromisily,
} from 'sortList';
import { testIt } from './helper';

jest.setTimeout(480000);

testIt(sortListRecursively)(null, null);
testIt(sortListRecursively)(ListNode.fromArray([1]), ListNode.fromArray([1]));
testIt(sortListRecursively)(
  ListNode.fromArray([1, 2]),
  ListNode.fromArray([1, 2])
);
testIt(sortListRecursively)(
  ListNode.fromArray([1, 2]),
  ListNode.fromArray([2, 1])
);
testIt(sortListRecursively)(
  ListNode.fromArray([1, 2, 3]),
  ListNode.fromArray([1, 2, 3])
);
testIt(sortListRecursively)(
  ListNode.fromArray([1, 2, 3]),
  ListNode.fromArray([1, 3, 2])
);
testIt(sortListRecursively)(
  ListNode.fromArray([1, 2, 3]),
  ListNode.fromArray([2, 1, 3])
);
testIt(sortListRecursively)(
  ListNode.fromArray([1, 2, 3]),
  ListNode.fromArray([2, 3, 1])
);
testIt(sortListRecursively)(
  ListNode.fromArray([1, 2, 3]),
  ListNode.fromArray([3, 1, 2])
);
testIt(sortListRecursively)(
  ListNode.fromArray([1, 2, 3]),
  ListNode.fromArray([3, 2, 1])
);
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

testIt(mergeSortListPromisily)(ListNode.fromArray(a), ListNode.fromArray(a.reverse()));

testIt(sortListRecursively)(
  ListNode.fromArray([0, 0, 0]),
  ListNode.fromArray([0, 0, 0])
);

describe('swap', () => {
  it('swaps 2nd and tail', () => {
    const list = ListNode.fromArray([0, -1, 1, 2]);
    swap(list!, list!.next!, list!.next!.next!, list!.next!.next!.next!);
    expect(list!.toString()).toEqual('0->2->1->-1');
  });

  it('swaps head and tail', () => {
    const list = ListNode.fromArray([0, -1, 1]);
    const swapped = swapHeadAndNode(list!, list!.next!, list!.next!.next!);
    expect(swapped!.toString()).toEqual('1->-1->0');
  });

  it("swaps head and it's next", () => {
    const list = ListNode.fromArray([0, -1, 1]);
    const swapped = swapFirstTwoNodes(list!, list!.next!);
    expect(swapped!.toString()).toEqual('-1->0->1');
  });

  it('swaps neighbors', () => {
    const list = ListNode.fromArray([0, -1, 1]);
    swapNeighbors(list!, list!.next!, list!.next!.next!);
    expect(list!.toString()).toEqual('0->1->-1');
  });
});

describe('merge sort', () => {
  it('gets list length', () => {
    const list = ListNode.fromArray([1, 2, 3, 4]);
    expect(getListLength(list)).toEqual(4);
  });

  it('gets middle node', () => {
    let list = ListNode.fromArray([]);
    expect(getMiddleNode(list)).toEqual(null);

    list = ListNode.fromArray([1]);
    expect(getMiddleNode(list)).toEqual({ val: 1, next: null });

    list = ListNode.fromArray([1, 2]);
    expect(getMiddleNode(list)).toEqual(list);

    list = ListNode.fromArray([1, 2, 3]);
    expect(getMiddleNode(list)).toEqual(list!.next);

    list = ListNode.fromArray([1, 2, 3, 4]);
    expect(getMiddleNode(list)!.toString()).toEqual('2->3->4');
  });

  it('merge sorts []', () => {
    let list = ListNode.fromArray([]);
    expect(mergeSortList(list)).toEqual(ListNode.fromArray([]));
  });

  it('merge sorts [1]', () => {
    let list = ListNode.fromArray([1]);
    expect(mergeSortList(list)).toEqual(ListNode.fromArray([1]));
  });

  it('merge sorts [2, 1]', () => {
    let list = ListNode.fromArray([2, 1]);
    expect(mergeSortList(list)).toEqual(ListNode.fromArray([1, 2]));
  });

  it('merge sorts [3, 2, 1]', () => {
    let list = ListNode.fromArray([3, 2, 1]);
    expect(mergeSortList(list)).toEqual(ListNode.fromArray([1, 2, 3]));
  });

  it('merge sorts [4, 3, 2, 1]', () => {
    let list = ListNode.fromArray([4, 3, 2, 1]);
    expect(mergeSortList(list)).toEqual(ListNode.fromArray([1, 2, 3, 4]));
  });

  testIt(mergeSortList)(ListNode.fromArray([1, 2, 3, 4, 5]), ListNode.fromArray([5, 4, 3, 2, 1]));

  testIt(mergeSortList)(ListNode.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), ListNode.fromArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

  const a = new Array(26).fill(0).map((_, i) => i);
  testIt(mergeSortList)(ListNode.fromArray(a), ListNode.fromArray(a.reverse()));
});

describe('merge async', () => {
  it('merges [] async', done => {
    let list = ListNode.fromArray([]);
    mergeSortListAsync(list, (res: ListNode | null) => {
      expect(res).toEqual(ListNode.fromArray([]))
      done();
    })
  });

  it('merges async', (done) => {
    let list = ListNode.fromArray([4, 3, 2, 1]);
    mergeSortListAsync(list, (res: ListNode) => {
      expect(res).toEqual(ListNode.fromArray([1, 2, 3, 4]))
      done();
    })
  })

  it('merges in a promisified way', async () => {
    let list = ListNode.fromArray([4, 3, 2, 1]);
    expect(await mergeSortListPromisily(list)).toEqual(ListNode.fromArray([1, 2, 3, 4]));
  })
})
