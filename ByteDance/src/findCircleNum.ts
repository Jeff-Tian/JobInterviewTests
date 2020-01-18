export const findCircleNum = (M: number[][]) => {
  if (M[0].length <= 0) {
    return 0;
  }

  const unvisited = M.map((_value, index) => index);

  let count = 0;
  while (unvisited.length > 0) {
    count++;
    traverse(M, unvisited.pop()!, unvisited);
  }

  return count;
};

const traverse = (M: number[][], start: number, unvisited: number[]) => {
  for (let i = unvisited.length - 1; i >= 0; i--) {
    if (M[start][unvisited[i]] === 1) {
      traverse(M, unvisited.splice(i, 1)[0], unvisited);
    }
  }
};
