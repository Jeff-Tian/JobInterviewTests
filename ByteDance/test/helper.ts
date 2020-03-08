import { ListNode } from '../src/common/ListNode';

const test = (testFn: Function) => (func: Function, message?: string) =>
  runTests(testFn, message, func);
const tests = (testFn: Function) => (funcs: Function[], message?: string) =>
  runTests(testFn, message, ...funcs);

export const testIt: any = test(it);
testIt.skip = test(it.skip);
testIt.only = test(it.only);

export const testThem: any = tests(it);
testThem.skip = tests(it.skip);
testThem.only = test(it.only);

function runTests(
  testFn: Function,
  message: string | undefined,
  ...funcs: Function[]
) {
  return (
    expectedResult:
      | boolean
      | string
      | string[]
      | Set<string>
      | number
      | number[]
      | {
          [key: string]: number;
        }
      | number[][]
      | null
      | ListNode,
    ...args: (string | number | any)[]
  ) =>
    funcs.forEach(func =>
      testFn(
        message ||
          func.toString().substr(10, 10) +
            ': ' +
            args.map(a => (a ? a.toString() : '<null>')).join(' ') +
            ' --> ' +
            expectedResult,
        async () => {
          let actual = await func(...args);
          if (
            actual instanceof ListNode &&
            expectedResult instanceof ListNode
          ) {
            expect(actual.toString()).toEqual(expectedResult.toString());
          }
          expect(actual).toEqual(expectedResult);
        }
      )
    );
}
