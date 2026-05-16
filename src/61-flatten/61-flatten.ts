export default function flatten<T>(value: T[]) {
  const result: T[] = [];

  const unpack = (item: T[] | T) => {
    if (!Array.isArray(item)) {
      result.push(item);
      return;
    }

    item.forEach((i) => unpack(i));
  };

  unpack(value);
  return result;
}
