import { merge } from './merge-sorted-array';

describe('merge', () => {
  it('should merge two sorted arrays', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    const expected = [1, 2, 2, 3, 5, 6];
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual(expected);
  });
});
