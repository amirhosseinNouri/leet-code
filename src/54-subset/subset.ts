function subsets(nums: number[]): number[][] {
  const n = nums.length;

  const sol: number[] = [];
  const result: number[][] = [];

  const backtrack = (i: number) => {
    if (i === n) {
      result.push([...sol]);
      return;
    }

    backtrack(i + 1);

    sol.push(nums[i]);
    backtrack(i + 1);
    sol.pop();
  };

  backtrack(0);
  return result;
}

export { subsets };
