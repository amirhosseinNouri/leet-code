function isValid(s: string): boolean {
  const stack: Array<string> = [];

  for (let i = 0; i < s.length; i++) {
    const currentCharacter = s[i];

    if (isOpening(currentCharacter)) {
      stack.push(currentCharacter);
      continue;
    }

    // Closing character
    if (stack.length === 0) {
      return false;
    }

    const topCharacter = getLastItem(stack);

    if (arePairs(currentCharacter, topCharacter)) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

function isOpening(character: string): boolean {
  return ['(', '[', '{'].includes(character);
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
