const START = 0;
const END = 1;

function insert(intervals: number[][], newInterval: number[]): number[][] {
  let i = 0;
  const [newStart, newEnd] = newInterval;
  while (i < intervals.length) {
    const [start, end] = intervals[i];

    if (
      (start >= newStart && start <= newEnd) ||
      (end >= newStart && end <= newEnd) ||
      (newStart >= start && newStart <= end) ||
      (newEnd >= start && newEnd <= end)
    ) {
      newInterval = mergeIntervals(intervals[i], newInterval);
      intervals.splice(i, 1);
    } else {
      i++;
    }
  }

  intervals.push(newInterval);
  intervals.sort((a, end) => a[0] - end[0]);

  return intervals;
}

const mergeIntervals = (int1: number[], int2: number[]): number[] => [
  Math.min(int1[START], int2[START]),
  Math.max(int1[END], int2[END]),
];

export default insert;
