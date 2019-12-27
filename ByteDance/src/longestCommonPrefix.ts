export var longestCommonPrefix = function(strs: string[]) {
  if (strs.length <= 0) {
    return '';
  }

  for (let i = 0; i < strs[0].length; i++) {
    if (
      strs.filter(s => s.indexOf(strs[0].substr(0, i + 1)) === 0).length !==
      strs.length
    ) {
      return strs[0].substr(0, i);
    }
  }

  return strs[0];
};
