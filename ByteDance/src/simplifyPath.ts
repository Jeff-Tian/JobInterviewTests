export const simplifyPath = (path: string) => {
  return (
    '/' +
    path
      .split('/')
      .filter(s => s.length > 0)
      .reduce((prev: string[], next: string) => {
        if (next === '..') {
          prev.pop();
          return prev;
        }

        if (next === '.') {
          return prev;
        }

        return [...prev, next];
      }, [])
      .join('/')
  );
};
