import { longestCommonPrefix } from '../src/longestCommonPrefix';

describe('无重复字符的最长子串', () => {
  it('["flower","flow","flight"]', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
  });

  it('["dog","racecar","car"]', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
  });
});
