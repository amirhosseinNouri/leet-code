import lengthOfLastWord from './length-of-last-word';

describe('lengthOfLastWord tests', () => {
  it('should return the last word length', () => {
    expect(lengthOfLastWord('test len')).toBe(3);
  });

  it('should return the last word length when there are many spaces in the parameter', () => {
    expect(lengthOfLastWord('       test len')).toBe(3);
  });

  it('should return the correct length when the parameter is only one character', () => {
    expect(lengthOfLastWord('a')).toBe(1);
  });

  it('should return the correct length of the last word when there are spaces at the end of the parameter', () => {
    expect(lengthOfLastWord('test len   ')).toBe(3);
  });
});
