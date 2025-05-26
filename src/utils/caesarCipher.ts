// New alphabet: a-ž, A-Ž, 0-9 (no couplet letters, no symbols)
const CRO_ALPHABET = [
  ...'abcčćdeđfghijklmnoprsštuvzž', // lower
  ...'ABCČĆDEĐFGHIJKLMNOPRSŠTUVZŽ', // upper
  ...'0123456789' // numbers
];

export const caesarEncode = (text: string, direction: 'L' | 'R', amount: number): string => {
  const shift = direction === 'L' ? -amount : amount;
  const len = CRO_ALPHABET.length;
  return text.split('').map(char => {
    const idx = CRO_ALPHABET.indexOf(char);
    if (idx !== -1) {
      // Shift only if in our alphabet
      const shifted = (idx + shift + len) % len;
      return CRO_ALPHABET[shifted];
    }
    // Leave all other chars unchanged
    return char;
  }).join('');
};

export const getShiftDescription = (direction: 'L' | 'R', amount: number): string => {
  return `${direction}${amount}`;
};
