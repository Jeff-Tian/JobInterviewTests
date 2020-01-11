import { curry } from '../src/helpers/curry';

describe('柯里化', () => {
  it('curry1', () => {
    const add10 = (x: number) => 10 + x;

    expect(curry(add10)(30)).toEqual(40);
  });

  it('curry2', () => {
    const add = (x: number, y: number) => x + y;

    expect(curry(add)(10)(30)).toEqual(40);
    expect(curry(add)(10, 30)).toEqual(40);
  });

  it('curry3', () => {
    const last = (x: number, y: number, z: number) => x + y + z - x - y;
    const last2 = (x: number, y: number, z: number, w: number) =>
      x + y + z + w - x - y - z;

    expect(curry(last)(10)(20)(30)).toEqual(30);
    expect(curry(last2)(10)(20)(30)(40)).toEqual(40);
  });
});
