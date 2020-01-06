export const areaOfIsland = (
  grid: number[][],
  startRow: number,
  startCol: number
): number => {
  let sum = 1;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < directions.length; i++) {
    let x = startRow + directions[i][0];
    let y = startCol + directions[i][1];

    grid[startRow][startCol] = 0;
    if (
      x >= 0 &&
      x < grid.length &&
      y >= 0 &&
      y < grid[0].length &&
      grid[x][y] === 1
    ) {
      sum += areaOfIsland(grid, x, y);
    }
  }

  return sum;
};

export const maxAreaOfIsland = (originalGrid: number[][]): number => {
  let max = 0;

  const grid = originalGrid.slice(0).map(i => i.slice(0));

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        max = Math.max(max, areaOfIsland(grid, row, col));
      }
    }
  }

  return max;
};
