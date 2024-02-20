const reverseBits = (n: number): number =>
  parseInt(n.toString(2).split('').reverse().join('').padEnd(32, '0'), 2);

export default reverseBits;
