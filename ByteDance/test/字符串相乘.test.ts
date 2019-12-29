import { testIt } from './helper';
import {
  getValue,
  multiply,
  padLeft,
  stringNumberAdd,
  unpadLeft,
} from '../src/multiply';

describe('相乘', () => {
  testIt(multiply)('6', '2', '3');
  testIt(multiply)('15', '5', '3');
  testIt(multiply)('56088', '123', '456');
  testIt(multiply)('121932631112635269', '123456789', '987654321');
  testIt(multiply)('419254329864656431168468', '498828660196', '840477629533');
  testIt(multiply)('0', '0', '0');
  testIt(multiply)(
    '2361988447605003674312836',
    '93553535314',
    '25247452591474'
  );
  testIt(multiply)(
    '109076106670961085913063703104432431270309088426528301147652985915447613550370181877081648097709240052913800575431944409211039276203393769302218273618687882381732249156832915',
    '17713693108358378680072681827220994275895642679450569947042064076615194860248215',
    '6157728148710697840711533037191926601417410571458451704108837221091155108177315170452863668581'
  );
});

describe('getValue', () => {
  testIt(getValue)(6, '6');
  testIt(getValue)(3, '3');
});

describe('stringNumberAdd', () => {
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
  testIt(stringNumberAdd)('353464336281836', '353464336280636', '1200');
  testIt(stringNumberAdd)(
    '100989810365896',
    '20989810365896',
    '80000000000000'
  );
});

describe('padLeft', () => {
  testIt(padLeft)('00001', '1', 5);
});

describe('unpadLeft', () => {
  testIt(unpadLeft)('1', '000001');
  testIt(unpadLeft)('1000', '000001000');
  testIt(unpadLeft)('0', '00000');
});
