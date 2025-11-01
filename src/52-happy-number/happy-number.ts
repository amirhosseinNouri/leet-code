function isHappy(n: number): boolean {
  const ref = new Set();

  function helper(num: number): boolean {
    if (num === 1) {
      return true;
    }

    if (ref.has(num)) {
      return false;
    }

    ref.add(num);

    const sum = num
      .toString()
      .split('')
      .reduce((prev, curr) => prev + Math.pow(Number(curr), 2), 0);

    return helper(sum);
  }

  return helper(n);
}

export { isHappy };
