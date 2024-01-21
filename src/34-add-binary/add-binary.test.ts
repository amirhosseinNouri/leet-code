import addBinary from './add-binary';

describe('addBinary tests', () => {
  it('should add two binaries correctly', () => {
    expect(addBinary('11', '1')).toBe('100');
  });

  it('should handle adding with zero correctly', () => {
    expect(addBinary('11', '0')).toBe('11');
  });

  it('should handle sum of large numbers correctly', () => {
    const a =
      '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101';
    const b =
      '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011';

    const expected =
      '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000';

    expect(addBinary(a, b)).toBe(expected);
  });
});
