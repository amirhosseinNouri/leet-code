function findPeaks(mountain: number[]): number[] {
  const arr = [];

  for (let i = 1; i < mountain.length - 1; i++) {
    const curr = mountain[i];
    if (curr > mountain[i - 1] && curr > mountain[i + 1]) {
      arr.push(i);
      i++;
    }
  }

  return arr;
}
export default findPeaks;
