import { testIt } from './helper';
import { isomorphic, structure } from '../src/isomorphic';

describe('同构', () => {
  testIt(structure, '一个字符串的结构，可以用其字符第一次出现的序号表达')(
    '002244',
    'aabbcc'
  );
  testIt(isomorphic, '空字符串应该同构')(true, '', '');
  testIt(isomorphic, '自己应该同构')(true, 'aabbcc', 'aabbcc');
  testIt(isomorphic, '各字符串第一次索引序号相同，序号序列相同，则同构')(
    true,
    'aabbcc',
    'xxyyzz'
  );
  testIt(isomorphic, '第一次索引序号相同，索引序列不同，则不同构')(
    false,
    'aabacc',
    'xxyyzz'
  );
  testIt(isomorphic, '任何字符串第一次索引序号不相同，则不同构')(
    false,
    'aabacc',
    'xxyyzz'
  );
  testIt(isomorphic)(true, 'aabbcc', 'zzxxyy');
});
