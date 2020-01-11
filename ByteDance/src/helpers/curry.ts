export const curry = (f: (...x: any[]) => any) => {
  return function curried(...x: any[]): any {
    if (x.length < f.length) {
      return (...y: any[]) => curried(...x, ...y);
    }

    return f(...x);
  };
};
