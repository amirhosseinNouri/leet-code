// https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  // [2,7,11,15]
  // t=9

  for (let i = 0; i < nums.length; i++) {
    const c = nums[i];
    const d = target - c;

    const check = map.get(d);

    if (check !== undefined) {
      return [check, i];
    }

    map.set(c, i);
  }

  return [];
}

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices: number[]): number {
  let b = prices[0];
  let p = 0;

  for (let i = 1; i < prices.length; i++) {
    const c = prices[i];

    if (c < b) {
      b = c;
    } else if (c - b > p) {
      p = c - b;
    }
  }

  return p;
}

// https://leetcode.com/problems/minimum-common-value/description/?envType=problem-list-v2&envId=w1xfptlv
function getCommon(nums1: number[], nums2: number[]): number {
  let j = 0;
  let i = 0;
  for (const _ of nums1) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      return nums1[i];
    }
  }

  return -1;
}
//                                           i
// [5,15,16,20,22,39,43,44,44,55,61,62,62,64,72,73,81,88,90,95]
//                                            j
// [2,8,9,11,12,13,26,29,38,49,50,51,58,63,67,72,75,82,92,96]

console.log(
  getCommon(
    [
      5, 15, 16, 20, 22, 39, 43, 44, 44, 55, 61, 62, 62, 64, 72, 73, 81, 88, 90,
      95,
    ],
    [
      2, 8, 9, 11, 12, 13, 26, 29, 38, 49, 50, 51, 58, 63, 67, 72, 75, 82, 92,
      96,
    ],
  ),
);
