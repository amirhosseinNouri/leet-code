function maxProfit(p: number[]): number {
  if (p.length === 1) {
    return 0;
  }

  let total = 0;

  for (let i = 1; i < p.length; i++) {
    const today = p[i];
    const yesterday = p[i - 1];

    if (today > yesterday) {
      total += today - yesterday;
    }
  }

  return total;
}

export default maxProfit;
