import {checkInclusion, getPermutations, swap} from "../src/checkInclusion"

const testIt = (func?: Function) => (expectedResult: boolean | string | string[] | Set<string>, ...args: (string | number)[]) => it(args.join(' '), () => {
    let actual = (func || checkInclusion).apply(null, args)
    expect(actual).toEqual(expectedResult)
})

describe('字符串的排列', () => {
    testIt()(true, 'ab', 'eidbaooo')
    testIt()(false, 'ab', 'eidboaoo')
    testIt()(true, 'ab', 'ab')
    testIt()(false, '', '',)
    testIt()(false, 'ab', '')
})

describe('swap', () => {
    testIt(swap)('ab', 'ba', 0, 1)
    testIt(swap)('ab', 'ab', 0, 0)
    testIt(swap)('ba', 'ab', 1, 0)
    testIt(swap)('kbcdefghija', 'abcdefghijk', 0, 10)
})

describe('permutations', () => {
    testIt(getPermutations)(new Set(['ba', 'ab']), 'ba')
    testIt(getPermutations)(new Set([]), '')
    testIt(getPermutations)(new Set(['a']), 'a')
    testIt(getPermutations)(new Set(['abc', 'bac', 'cba', 'acb', 'bca', 'cab']), 'abc')
})
