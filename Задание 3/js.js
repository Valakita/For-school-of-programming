function isValidSequence(sequence) {
    const stack = [];
  
    for (let i = 0; i < sequence.length; i++) {
      const char = sequence[i];
  
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      } else if (char === ')' || char === ']' || char === '}') {
        if (stack.length === 0) {
          return false;
        }
  
        const top = stack.pop();
  
        if (
          (char === ')' && top !== '(') ||
          (char === ']' && top !== '[') ||
          (char === '}' && top !== '{')
        ) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }