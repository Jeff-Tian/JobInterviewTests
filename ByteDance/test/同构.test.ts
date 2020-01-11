import { testIt } from './helper';
import { checkIsomorphic } from '../src/checkIsomorphic';

describe('同构', () => {
  testIt(checkIsomorphic, '空字符串应该同构')(true, '', '');
  testIt(checkIsomorphic, '自己应该同构')(true, 'aabbcc', 'aabbcc');
  testIt(checkIsomorphic, '各字符串第一次索引序号相同，序号序列相同，则同构')(
    true,
    'aabbcc',
    'xxyyzz'
  );
  testIt(checkIsomorphic, '第一次索引序号相同，索引序列不同，则不同构')(
    false,
    'aabacc',
    'xxyyzz'
  );
  testIt(checkIsomorphic, '任何字符串第一次索引序号不相同，则不同构')(
    false,
    'aabacc',
    'xxyyzz'
  );
});
