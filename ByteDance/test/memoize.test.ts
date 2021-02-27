import { memoize, memoized } from 'helpers/memoize';

describe('memoize', () => {
  it('memoize sum', () => {
    let count = 0;

    const sum = (x1: number, x2: number) => {
      count++;

      return x1 + x2;
    };

    const memoizedSum = memoize(sum);

    expect(count).toBe(0);
    expect(memoizedSum(1, 1)).toEqual(2);
    expect(count).toBe(1);
    expect(memoizedSum(1, 1)).toEqual(2);
    expect(count).toBe(1);
    expect(memoizedSum(1, 2)).toEqual(3);
    expect(count).toBe(2);
  });

  it("doesn't memoize if you use it like this: ", () => {
    let count = 0;
    const sum = (x1: number, x2: number) => {
      count++;

      return x1 + x2;
    };

    expect(count).toBe(0);
    expect(memoize(sum)(1, 1)).toEqual(2);
    expect(count).toBe(1);
    expect(memoize(sum)(1, 1)).toEqual(2);
    expect(count).toBe(2);
  });

  it('does memoize if you use memoized instead', () => {
    let count = 0;
    const sum = (x1: number, x2: number) => {
      count++;

      return x1 + x2;
    };

    expect(count).toBe(0);
    expect(memoized(sum)(1, 1)).toEqual(2);
    expect(count).toBe(1);
    expect(memoized(sum)(1, 1)).toEqual(2);
    expect(count).toBe(1);
  });
});
