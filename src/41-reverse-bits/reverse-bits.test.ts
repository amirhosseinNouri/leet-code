import reverseBits from './reverse-bits';

describe('reverseBits test', () => {
  it('should reverse the binary correctly', () => {
    expect(reverseBits(0b00000010100101000001111010011100)).toBe(964176192);
  });
});
