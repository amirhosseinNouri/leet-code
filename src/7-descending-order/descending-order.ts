export default function descendingOrder(n: number): number {
  const result = n.toString().split('').sort(sortInDescendingOrder).join('');

  return Number(result);
}

function sortInDescendingOrder(a: string, b: string) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
}
