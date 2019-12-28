export const checkInclusion = (s1: string, s2: string) => {
  const windowLength = s1.length;
  const amount = getAmount(s1);

  for (let i = 0; i < s2.length - windowLength + 1; i++) {
    const substr = s2.substr(i, windowLength);
    if (equals(amount, getAmount(substr))) {
      return true;
    }
  }

  return false;
};

export const getAmount = (s: string) =>
  s.split('').reduce((previousValue: any, currentValue) => {
    previousValue[currentValue] = previousValue[currentValue]
      ? previousValue[currentValue] + 1
      : 1;
    return previousValue;
  }, {});

export const equals = (o1: any, o2: any) => {
  return (
    Object.keys(o1).length === Object.keys(o2).length &&
    Object.keys(o1).filter(key => o1[key] !== o2[key]).length === 0
  );
};
