import { ListNode } from '../src/common/ListNode';

export const testIt = (func: Function, message?: string) => (
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
  it(
    message ||
      args.map(a => (a ? a.toString() : '<null>')).join(' ') +
        ' --> ' +
        expectedResult,
    () => {
      let actual = func(...args);
      expect(actual).toEqual(expectedResult);
    }
  );
