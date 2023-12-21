function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const n = grid.length;
  const arr: number[] = new Array(n * n).fill(0);

  let twice = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const item = grid[i][j];
      arr[item - 1]++;

      if (arr[item - 1] === 2) {
        twice = item;
      }
    }
  }

  const missing = arr.findIndex((item) => item === 0) as number;

  return [twice, missing + 1];
}

export default findMissingAndRepeatedValues;
