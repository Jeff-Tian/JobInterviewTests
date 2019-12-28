import { testIt } from './helper';
import {
  getValue,
  multiply,
  multiplyWith,
  padLeft,
  singlify,
  stringNumberAdd,
  unpadLeft,
  toString,
  stringNumbersAdd,
} from '../src/multiply';

describe('相乘', () => {
  testIt(multiply)('6', '2', '3');
  testIt(multiply)('15', '5', '3');
  testIt(multiply)('56088', '123', '456');
  testIt(multiply)('121932631112635269', '123456789', '987654321');
});

describe('getValue', () => {
  testIt(getValue)(6, '6');
  testIt(getValue)(3, '3');
});

describe('singlify', () => {
  testIt(singlify)([1, 5], 15);
  testIt(singlify)([1, 2, 5], 125);
  testIt(singlify)([0], 0);
  testIt(singlify)([9, 8, 1, 7, 6, 5], 981765);
  testIt(singlify)([1, 0], 10);
  testIt(singlify)([1, 8], 18);
  testIt(singlify)([9, 0, 0], 900);
});

describe('multiplyWith', () => {
  testIt(multiplyWith)('18', ['3'], ['6']);
  testIt(multiplyWith)((6 * 10 + 18).toString(), ['1', '3'], ['6']);
  testIt(multiplyWith)('288', ['3'], ['9', '6']);
  testIt(multiplyWith)('960', ['1', '0'], ['9', '6']);
  testIt(multiplyWith)('1248', ['1', '3'], ['9', '6']);
});

describe.skip('stringNumberAdd', () => {
  testIt(stringNumberAdd)('2', '1', '1');
  testIt(stringNumberAdd)('9', '4', '5');
  testIt(stringNumberAdd)('10', '5', '5');
  testIt(stringNumberAdd)('20', '15', '5');
  testIt(stringNumberAdd)('40', '15', '25');
  testIt(stringNumberAdd)('20', '11', '9');
  testIt(stringNumberAdd)('18', '0', '18');
  testIt(stringNumberAdd)('78', '60', '18');
  testIt(stringNumberAdd)('198', '99', '99');
  testIt(stringNumberAdd)('300', '200', '100');
  testIt(stringNumberAdd)('1248', '288', '960');
  testIt(stringNumberAdd)('960', '60', '900');
  testIt(stringNumberAdd)('8888890569', '8888888969', '1600');
  testIt(stringNumberAdd)('90569', '88969', '1600');
  testIt(stringNumberAdd)('0', '0', '0');
});

describe('stringNumbersAdd', () => {
  testIt(stringNumbersAdd)('85269', [
    '9',
    '180',
    '2700',
    '36000',
    '80',
    '1600',
    '24000',
    '700',
    '14000',
    '6000',
  ]);
});

describe('padLeft', () => {
  testIt(padLeft)('00001', '1', 5);
});

describe('unpadLeft', () => {
  testIt(unpadLeft)('1', '000001');
  testIt(unpadLeft)('1000', '000001000');
  testIt(unpadLeft)('0', '00000');
});

describe('toString', () => {
  testIt(toString)('900', 900);
});
