import { testIt } from './helper';
import { reverseWords } from '../src/reverseWords';

describe('reverse words', () => {
  testIt(reverseWords)('blue is sky the', 'the sky is blue');
  testIt(reverseWords)('world! hello', '  hello world!  ');
  testIt(reverseWords)('example good a', 'a good   example');
});
