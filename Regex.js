function regexMatches(regex) {
    // ...
    let ourPattern=regex.source;
    
    let elements=ourPattern.split("|");
    return elements;
    
  }