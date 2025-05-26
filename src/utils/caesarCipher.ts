export const caesarEncode = (text: string, direction: 'L' | 'R', amount: number): string => {
  const shift = direction === 'L' ? -amount : amount;
  
  return text
    .split('')
    .map(char => {
      // Handle lowercase letters (a-z)
      if (char >= 'a' && char <= 'z') {
        const code = char.charCodeAt(0) - 97; // Convert to 0-25
        const shifted = (code + shift + 26) % 26; // Apply shift with wrap-around
        return String.fromCharCode(shifted + 97); // Convert back to letter
      }
      
      // Handle uppercase letters (A-Z)
      if (char >= 'A' && char <= 'Z') {
        const code = char.charCodeAt(0) - 65; // Convert to 0-25
        const shifted = (code + shift + 26) % 26; // Apply shift with wrap-around
        return String.fromCharCode(shifted + 65); // Convert back to letter
      }
      
      // Handle extended Latin characters (à-ž, À-Ž)
      if ((char >= 'à' && char <= 'ž') || (char >= 'À' && char <= 'Ž')) {
        // For extended characters, we'll use a simple mapping
        // This is a simplified approach for demonstration
        const isUppercase = char >= 'À' && char <= 'Ž';
        const baseChar = isUppercase ? 'A' : 'a';
        const baseCode = baseChar.charCodeAt(0);
        
        // Convert extended character to basic equivalent for shifting
        let basicChar = char.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (basicChar >= 'a' && basicChar <= 'z') {
          const code = basicChar.charCodeAt(0) - 97;
          const shifted = (code + shift + 26) % 26;
          return String.fromCharCode(shifted + 97);
        } else if (basicChar >= 'A' && basicChar <= 'Z') {
          const code = basicChar.charCodeAt(0) - 65;
          const shifted = (code + shift + 26) % 26;
          return String.fromCharCode(shifted + 65);
        }
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
