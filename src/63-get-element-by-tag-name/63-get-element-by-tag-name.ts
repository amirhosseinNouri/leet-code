export default function getElementsByTagName(
  element: Element,
  tagNameParam: string,
) {
  const result: Element[] = [];
  const tagName = tagNameParam.toLowerCase();

  const traverse = (el: Element) => {
    if (el === null) {
      return;
    }

    if (el.tagName.toLowerCase() === tagName) {
      result.push(el);
    }

    for (const child of el.children) {
      traverse(child);
    }
  };

  for (const child of element.children) {
    traverse(child);
  }

  return result;
}
