import { testIt } from './helper';
import PossibleIP, { restoreIpAddresses } from '../src/restoreIpAddresses';

describe('复原IP地址', () => {
  testIt(restoreIpAddresses)(
    ['255.255.11.135', '255.255.111.35'],
    '25525511135'
  );
  testIt(restoreIpAddresses)(['255.255.111.254'], '255255111254');
  testIt(restoreIpAddresses)(['0.1.0.100', '0.10.10.0', '0.101.0.0'], '010100');
  testIt(restoreIpAddresses)(
    ['255.255.11.254', '255.255.112.54'],
    '25525511254'
  );
});

describe('Possible IPs', () => {
  const pip = new PossibleIP(['000', '000', '00', '000']);
  pip.read('25525511135');
  expect(pip.value[0]).toEqual('255');
  expect(pip.value[1]).toEqual('255');
  expect(pip.value[2]).toEqual('11');
  expect(pip.value[3]).toEqual('135');
  testIt(pip.toString.bind(pip))('255.255.11.135');
});
