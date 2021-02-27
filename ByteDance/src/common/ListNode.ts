export interface IListNode {
  val: number | string;
  next: IListNode | null;
}

export class ListNode implements IListNode {
  val: number | string;
  next: IListNode | null;

  constructor(val: number | string) {
    this.val = val;
    this.next = null;
  }

  static fromArray(a: Array<number | string>): ListNode | null {
    if (a.length === 0) {
      return null;
    }

    const root = new ListNode(a[0]);
    let next: IListNode = root;

    a.slice(1).forEach(i => {
      next.next = new ListNode(i);
      next = next.next;
    });

    return root;
  }

  static createCycleLink(
    a: Array<number | string>,
    pos: number
  ): ListNode | null {
    if (pos < 0) {
      return ListNode.fromArray(a);
    }

    if (a.length === 0) {
      return null;
    }

    const root = new ListNode(a[0]);
    let next: IListNode = root;
    let cycleStart = pos === 0 ? root : null;

    a.slice(1).forEach((i, index) => {
      next.next = new ListNode(i);
      next = next.next;

      if (index + 1 === pos) {
        cycleStart = next;
      }
    });

    next.next = cycleStart;

    return root;
  }

  static createIntersectedLinks(
    listA: number[],
    listB: number[],
    skipA: number,
    skipB: number
  ) {
    const commonTail = ListNode.fromArray(listA.slice(skipA));

    const a = new ListNode(-Infinity);
    const b = new ListNode(-Infinity);

    let cur = a;
    listA.slice(0, skipA).forEach(i => {
      cur.next = new ListNode(i);
      cur = cur.next;
    });
    cur.next = commonTail;

    cur = b;
    listB.slice(0, skipB).forEach(i => {
      cur.next = new ListNode(i);
      cur = cur.next;
    });
    cur.next = commonTail;

    return [a.next!, b.next!];
  }

  toString(): string {
    return toArray(this).join('->');
  }
}

export const toArray = (n: ListNode | null) => {
  if (n === null) {
    return [];
  }

  let next: IListNode | null = n;
  const res: Array<number | string> = [next.val];

  let count = 0;
  while (next.next !== null) {
    count++;
    next = next.next;
    res.push(next.val);

    if (count > 10) {
      res.push('...');

      return res;
    }
  }

  return res;
};
