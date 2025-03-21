function doubleChar(str) {

    let newString="";
    for (let i=0;i<str.length;i++){
      newString+=str[i].repeat(2);
  
    }
    return newString;
  }