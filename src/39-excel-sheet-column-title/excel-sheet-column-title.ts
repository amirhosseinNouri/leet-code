function convertToTitle(columnNumber: number): string {
  let str: string = '';

  while (columnNumber > 0) {
    const num = (columnNumber - 1) % 26;
    str = String.fromCharCode(num + 65) + str;
    columnNumber = Math.floor((columnNumber - num) / 26);
  }
  return str;
}
export default convertToTitle;
