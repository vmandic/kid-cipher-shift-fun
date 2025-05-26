
// Croatian alphabet with 30 letters
const CROATIAN_ALPHABET_LOWER = ['a', 'b', 'c', 'č', 'ć', 'd', 'dž', 'đ', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'lj', 'm', 'n', 'nj', 'o', 'p', 'r', 's', 'š', 't', 'u', 'v', 'z', 'ž'];
const CROATIAN_ALPHABET_UPPER = ['A', 'B', 'C', 'Č', 'Ć', 'D', 'DŽ', 'Đ', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'LJ', 'M', 'N', 'NJ', 'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'V', 'Z', 'Ž'];

export const caesarEncode = (text: string, direction: 'L' | 'R', amount: number): string => {
  const shift = direction === 'L' ? -amount : amount;
  
  return text
    .split('')
    .map(char => {
      // Handle lowercase Croatian letters
      const lowerIndex = CROATIAN_ALPHABET_LOWER.indexOf(char);
      if (lowerIndex !== -1) {
        const shifted = (lowerIndex + shift + 30) % 30;
        return CROATIAN_ALPHABET_LOWER[shifted];
      }
      
      // Handle uppercase Croatian letters
      const upperIndex = CROATIAN_ALPHABET_UPPER.indexOf(char);
      if (upperIndex !== -1) {
        const shifted = (upperIndex + shift + 30) % 30;
        return CROATIAN_ALPHABET_UPPER[shifted];
      }
      
      // Handle numbers (0-9)
      if (char >= '0' && char <= '9') {
        const code = char.charCodeAt(0) - 48; // Convert to 0-9
        const shifted = (code + shift + 10) % 10; // Apply shift with wrap-around
        return String.fromCharCode(shifted + 48); // Convert back to number
      }
      
      // Return unchanged for other characters (spaces, punctuation, etc.)
      return char;
    })
    .join('');
};

export const getShiftDescription = (direction: 'L' | 'R', amount: number): string => {
  return `${direction}${amount}`;
};
