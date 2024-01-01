function plusOne(digits: number[]): number[] {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    let currentDigit = digits[i] + carry;

    if (currentDigit >= 10) {
      carry = 1;
      currentDigit -= 10;
    } else {
      carry = 0;
    }

    digits[i] = currentDigit;
  }

  if (carry) {
    digits.unshift(carry);
  }

  return digits;
}

export default plusOne;
