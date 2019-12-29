export function multiply(num1: string, num2: string) {
  let sum = '0';

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const ij = getValue(num1[i]) * getValue(num2[j]);

      let tens = new Array(
        Math.abs(num1.length + num2.length - i - j - 2)
      ).fill('0');

      const v = ij + tens.join('');
      sum = stringNumberAdd(sum, v);
    }
  }

  return sum;
}

const zero = '0'.charCodeAt(0);

export const getValue = (c: string) => c.charCodeAt(0) - zero;

export const stringNumberAdd = (s1: string, s2: string): string => {
  let finalLength = Math.max(s1.length, s2.length) + 1;
  const res = new Array(finalLength).fill(0);
  const padded1 = padLeft(s1, finalLength);
  const padded2 = padLeft(s2, finalLength);

  let flag = 0;

  for (let i = finalLength - 1; i > 0; i--) {
    let v = flag + getValue(padded1[i]) + getValue(padded2[i]);

    if (v < 10) {
      flag = 0;
      res[i] = v;
    } else {
      flag = 1;
      res[i] = getValue(v.toString()[1]);
    }
  }

  res[0] = flag;

  const output = res.join('');

  return unpadLeft(output);
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
