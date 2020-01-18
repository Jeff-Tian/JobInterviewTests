export interface IListNode {
  val: number;
  next: IListNode | null;
}

export class ListNode implements IListNode {
  val: number;
  next: IListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }

  static fromArray(a: number[]): ListNode | null {
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

  toString(): string {
    return toArray(this).join('->');
  }
}

export const toArray = (n: ListNode | null) => {
  if (n === null) {
    return [];
  }

  let next: IListNode | null = n;
  const res = [next.val];
  while (next.next !== null) {
    next = next.next;
    res.push(next.val);
  }

  return res;
};
