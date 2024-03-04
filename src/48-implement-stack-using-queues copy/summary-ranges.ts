function summaryRanges(nums: number[]): string[] {
  const output: string[] = [];

  for (let i = 0; i < nums.length; i++) {
    let j;

    let current = nums[i];
    for (j = i + 1; j < nums.length; j++) {
      if (current + 1 === nums[j]) {
        current++;
        continue;
      }
      break;
    }

    if (j === i + 1) {
      output.push(nums[i].toString());
    } else {
      output.push(`${nums[i]}->${nums[j - 1]}`);
    }

    i = j - 1;
  }

  return output;
}

export default summaryRanges;
