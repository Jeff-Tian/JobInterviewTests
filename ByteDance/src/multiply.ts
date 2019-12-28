export function multiplyWith(a1: string[], a2: string[]) {
  const a = [];

  for (let i = a1.length - 1; i >= 0; i--) {
    for (let j = a2.length - 1; j >= 0; j--) {
      const ij = getValue(a1[i]) * getValue(a2[j]);

      let tens = Math.pow(
        10,
        Math.abs(a1.length - (i + 1) + (a2.length - (j + 1)))
      );

      a.push(toString(ij * tens));
    }
  }

  return stringNumbersAdd(a);
}

export const multiply = (s1: string, s2: string) => {
  const a1 = s1.split('');
  const a2 = s2.split('');

  return multiplyWith(a1, a2);
};

const zero = '0'.charCodeAt(0);

export const getValue = (c: string) => c.charCodeAt(0) - zero;

export const toString = (v: number) =>
  singlify(v)
    .map(value => String.fromCharCode(value + zero))
    .join('');

export const singlify = (v: number) => {
  const a = [];
  let value = v;
  let residual = value % 10;

  while (value >= 0) {
    a.unshift(residual);

    value -= residual;
    value = value / 10;
    residual = value % 10;

    if (value <= 0 && residual <= 0) break;
  }

  return a;
};

export const stringNumberAdd = (s1: string, s2: string): string => {
  let finalNumber = Math.max(s1.length, s2.length) + 1;
  const res = new Array(finalNumber).fill(0);
  const padded1 = padLeft(s1, finalNumber);
  const padded2 = padLeft(s2, finalNumber);

  for (let i = finalNumber - 1; i >= 0; i--) {
    let v = getValue(padded1[i]) + getValue(padded2[i]);

    if (v === 0) {
      continue;
    }

    if (v < 10) {
      let newVar = res[i] + v;
      if (res[i]) {
        if (newVar < 10) {
          res[i] = newVar;
        } else {
          res[i] = toString(newVar)[1];
          res[i - 1] = res[i - 1] + getValue(toString(newVar)[0]);
        }
      } else {
        res[i] = v;
      }
    } else {
      res[i] = res[i] + getValue(toString(v)[1]);
      res[i - 1] = res[i - 1] + getValue(toString(v)[0]);
    }
  }

  return unpadLeft(res.join(''));
};

export const padLeft = (s: string, howMany: number) => {
  if (howMany <= s.length) return s;

  let padded = new Array(howMany).fill(0).join('') + s;
  return padded.substr(padded.length - howMany);
};

export const unpadLeft = (s: string) => {
  const a = s.split('');
  while (a[0] === '0') {
    a.shift();
  }

  return a.join('') || '0';
};

export const stringNumbersAdd = (a: string[]) => {
  return a.reduce((previousValue, currentValue) => {
    return stringNumberAdd(previousValue, currentValue);
  }, '0');
};
