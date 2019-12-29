import { testIt } from './helper';
import { simplifyPath } from '../src/simplifyPath';

describe('简化路径', () => {
  testIt(simplifyPath)('/home', '/home/');
  testIt(simplifyPath)('/', '/../');
  testIt(simplifyPath)('/home/foo', '/home//foo/');
  testIt(simplifyPath)('/c', '/a/./b/../../c/');
  testIt(simplifyPath)('/c', '/a/../../b/../c//.//');
  testIt(simplifyPath)('/a/b/c', '/a//b////c/d//././/..');
});
