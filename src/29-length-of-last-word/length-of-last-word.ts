function lengthOfLastWord(s: string): number {
  return String(s.trimEnd().split(' ').pop()).length;
}

export default lengthOfLastWord;
