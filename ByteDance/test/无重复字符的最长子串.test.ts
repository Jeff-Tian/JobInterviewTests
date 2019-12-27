import {lengthOfLongestSubstring} from "../src/lengthOfLongestSubstring"

describe('无重复字符的最长子串', () => {
    it('abcabcbb', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
    })

    it('bbbbb', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
    })

    it('pwwkew', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
    })
})
