import { ListNode } from 'common/ListNode';

describe('ListNode', () => {
  it('stringifies', () => {
    const root = new ListNode(1);
    expect(root.toString()).toEqual('1');
  });

  it('stringifies cyclic link', () => {
    const root = ListNode.createCycleLink([1], 0);
    expect(root!.toString()).toStrictEqual('1->...');
  });

  it('stringifies cyclic link with 2 elements', () => {
    const root = ListNode.createCycleLink([1, 2], 0);
    expect(root!.toString()).toEqual('1->2->...');
  });
});
