type Curried<Args extends unknown[], Return> = Args extends [
  infer First,
  ...infer Rest,
]
  ? (arg: First) => Curried<Rest, Return>
  : Return;

export default function curry<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): Curried<Args, Return> {
  function curried(this: ThisParameterType<typeof fn>, ...args: unknown[]) {
    if (args.length >= fn.length) {
      return fn.apply(this, args as Args);
    }

    return (arg: unknown) =>
      arg === undefined
        ? curried.apply(this, args)
        : curried.apply(this, [...args, arg]);
  }

  return curried as Curried<Args, Return>;
}
