/**
 * @param {Record<string, unknown> | Array<unknown>} objectParam
 * @param {string | Array<string | number>} pathParam
 * @param {unknown} [defaultValue]
 * @return {unknown}
 */

export default function get(
  objectParam: Record<string, unknown>,
  pathParam: string | Array<string | number>,
  defaultValue: unknown,
) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.');

  let index = 0;
  let obj = objectParam;

  while (obj != null && index < path.length) {
    const p = path[index];
    console.log(p);
    obj = obj[String(path[index])];
    index++;
  }

  const value = index === path.length ? obj : undefined;

  return value !== undefined ? value : defaultValue;
}
