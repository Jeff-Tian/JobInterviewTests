export const testIt = (func: Function, message?: string) => (
  expectedResult:
    | boolean
    | string
    | string[]
    | Set<string>
    | number
    | number[]
    | { [key: string]: number }
    | number[][],
  ...args: (string | number | any)[]
) =>
  it(message || args.join(' ') + ' --> ' + expectedResult, () => {
    let actual = func(...args);
    expect(actual).toEqual(expectedResult);
  });
