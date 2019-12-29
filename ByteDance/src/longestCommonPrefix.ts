const curry = (fn: Function) => (leftMostArg: any) => (...args: any[]) =>
  fn(leftMostArg, ...args);

const startsWith = curry((prefix: string, s: string) => s.startsWith(prefix));

export var longestCommonPrefix = function(strs: string[]) {
  if (strs.length <= 0) {
    return '';
  }

  for (let i = 0; i < strs[0].length; i++) {
    const prefix = strs[0].substr(0, i + 1);

    if (strs.filter(startsWith(prefix)).length !== strs.length) {
      return strs[0].substr(0, i);
    }
  }

  return strs[0];
};
