/**
 * @param {(this: any, ...args: Array<unknown>) => unknown} func
 * @param {number} wait
 * @returns {(this: any, ...args: Array<unknown>) => unknown}
 */
export default function throttle(
  func: (this: any, ...args: Array<unknown>) => unknown,
  wait: number,
) {
  let shouldThrottle = false;

  return function (this: ThisParameterType<unknown>, ...args: unknown[]) {
    if (shouldThrottle) {
      return;
    }

    shouldThrottle = true;

    setTimeout(() => {
      shouldThrottle = false;
    }, wait);

    func.apply(this, args);
  };
}
