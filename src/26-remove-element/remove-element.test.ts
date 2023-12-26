import removeElement from './remove-element';

describe('removeElement tests', () => {
  it('should return the correct length after removing num', () => {
    const arr = [3, 2, 2, 3];
    const length = removeElement(arr, 3);
    expect(length).toBe(2);
    const expectedArray = [2, 2];

    for (let i = 0; i < 2; i++) {
      expect(arr[i]).toBe(expectedArray[i]);
    }
  });
});
