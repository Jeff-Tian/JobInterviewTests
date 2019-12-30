export default class PossibleIP {
  value: string[];

  constructor(a: string[]) {
    this.value = a;
  }

  public size() {
    return this.value.join('').length;
  }

  public toString() {
    return this.value.join('.');
  }

  public read(s: string) {
    this.value[0] = s.substr(0, this.value[0].length);
    this.value[1] = s.substr(this.value[0].length, this.value[1].length);
    this.value[2] = s.substr(
      this.value[0].length + this.value[1].length,
      this.value[2].length
    );
    this.value[3] = s.substr(
      this.value[0].length + this.value[1].length + this.value[2].length,
      this.value[3].length
    );

    return this;
  }

  public isValid() {
    const noLeftPaddedZeros = (v: string) =>
      !(v.startsWith('0') && v.length > 1);

    return (
      Number(this.value[0]) <= 255 &&
      Number(this.value[1]) <= 255 &&
      Number(this.value[2]) <= 255 &&
      Number(this.value[3]) <= 255 &&
      noLeftPaddedZeros(this.value[0]) &&
      noLeftPaddedZeros(this.value[1]) &&
      noLeftPaddedZeros(this.value[2]) &&
      noLeftPaddedZeros(this.value[3])
    );
  }
}

const replaceSegment = (i: number, index: number, ip: string[]) =>
  (ip[index] = new Array(i + 1).fill('0').join(''));

export const permutations = (() => {
  const res = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          const ip = new Array(4).fill('000');

          replaceSegment(i, 0, ip);
          replaceSegment(j, 1, ip);
          replaceSegment(k, 2, ip);
          replaceSegment(l, 3, ip);

          res.push(new PossibleIP(ip));
        }
      }
    }
  }

  return res;
})();

const size = (length: number) => (pip: PossibleIP) => pip.size() === length;
const read = (s: string) => (pip: PossibleIP) => pip.read(s);
const isValid = (pip: PossibleIP) => pip.isValid();
const toString = (pip: PossibleIP) => pip.toString();

export const restoreIpAddresses = (s: string) => {
  return permutations
    .filter(size(s.length))
    .map(read(s))
    .filter(isValid)
    .map(toString);
};
