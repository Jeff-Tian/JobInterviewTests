import { ListNode } from 'common/ListNode';

export const memoize = (fn: Function) => {
  const cache: Record<string, any> = {};

  return (...args: any) => {
    const key = args
      .map((arg: any) =>
        arg instanceof ListNode ? arg.toString() : JSON.stringify(arg)
      )
      .join('-');
    if (!cache[key]) {
      cache[key] = fn(...args);
    }

    return cache[key];
  };
};

export const memoized = memoize(memoize);
