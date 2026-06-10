export default function isBalancedBrackets(str: string) {
  const pairs = new Map();
  pairs.set('(', ')');
  pairs.set('{', '}');
  pairs.set('[', ']');

  const stack: string[] = [];
  const characters = str.split('');

  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    const match = pairs.get(char);

    // open
    if (match) {
      stack.push(char);
    }
    // close
    else {
      const popped = stack.pop();
      const poppedPair = pairs.get(popped);
      if (poppedPair !== char) {
        console.log('FFF');
        return false;
      }
    }
  }

  return stack.length === 0;
}
