function isValid(s: string): boolean {
  const stack: Array<string> = [];

  for (let i = 0; i < s.length; i++) {
    const currentCharacter = s[i];

    if (isClosing(currentCharacter)) {
      if (stack.length === 0) {
        console.log('nothing to pop. returning false');
        return false;
      }

      const topCharacter = getLastItem<string>(stack);

      if (arePairs(currentCharacter, topCharacter)) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(currentCharacter);
    }
  }
  return stack.length === 0;
}

function isClosing(character: string): boolean {
  return [')', ']', '}'].includes(character);
}

function getLastItem<T>(array: Array<T>): T {
  return array[array.length - 1];
}

function arePairs(closing: string, opening: string): boolean {
  const mapClosingToOpening: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  return mapClosingToOpening[closing] === opening;
}

export default isValid;
