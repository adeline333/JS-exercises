function calculator(a, b, sign) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return "unknown value";
    }
  
    if (sign === "+") {
      return a + b;
    } else if (sign === "-") {
      return a - b; // Corrected: a - b, not a = b
    } else if (sign === "*") {
      return a * b;
    } else if (sign === "/") {
      if (b === 0) {
        return "unknown value"; // Handle division by zero
      }
      return a / b;
    } else {
      return "unknown value";
    }
  }
  
  