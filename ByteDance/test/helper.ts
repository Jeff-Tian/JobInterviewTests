import { ListNode } from '../src/common/ListNode';

const test = (testFn: Function) => (func: Function, message?: string) => (
  expectedResult:
    | boolean
    | string
    | string[]
    | Set<string>
    | number
    | number[]
    | { [key: string]: number }
    | number[][]
    | null
    | ListNode,
  ...args: (string | number | any)[]
) =>
  testFn(
    message ||
      args.map(a => (a ? a.toString() : '<null>')).join(' ') +
        ' --> ' +
        expectedResult,
    () => {
      let actual = func(...args);

      if (actual instanceof ListNode && expectedResult instanceof ListNode) {
        expect(actual.toString()).toEqual(expectedResult.toString());
      }
      expect(actual).toEqual(expectedResult);
    }
  );

export const testIt: any = test(it);
testIt.skip = test(it.skip);
