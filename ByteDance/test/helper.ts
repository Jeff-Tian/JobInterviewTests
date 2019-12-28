export const testIt = (func: Function) => (
  expectedResult:
    | boolean
    | string
    | string[]
    | Set<string>
    | number
    | number[]
    | { [key: string]: number },
  ...args: (string | number | any)[]
) =>
  it(args.join(' ') + ' --> ' + expectedResult, () => {
    let actual = func.apply(null, args);
    expect(actual).toEqual(expectedResult);
  });
