import { testIt } from './helper';
import { addTwoNumbers } from '../src/addTwoNumbers';
import { ListNode } from 'common/ListNode';
import { compose } from 'helpers/compose';

const toArray = (node: ListNode) => node.toString();

testIt(compose(toArray, addTwoNumbers))(
  '7->0->8',
  ListNode.fromArray([2, 4, 3]),
  ListNode.fromArray([5, 6, 4])
);

testIt(compose(toArray, addTwoNumbers))(
  '8->8->3',
  ListNode.fromArray([2, 4, 3]),
  ListNode.fromArray([6, 4])
);

testIt(compose(toArray, addTwoNumbers))(
  '0->1',
  ListNode.fromArray([5]),
  ListNode.fromArray([5])
);
