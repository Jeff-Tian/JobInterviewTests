export const addSerials = (a: string[]) => {
  const stats = a.reduce((prev: any, next) => {
    prev[next] = -~prev[next];

    return prev;
  }, {});

  Object.keys(stats).forEach(key => {
    if (stats[key] === 1) {
      stats[key] = false;
    }
  });

  return a
    .reverse()
    .map(item => item + (stats[item] ? stats[item]-- : ''))
    .reverse();
};
