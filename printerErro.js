function printerError(s) {
    // your code
  
  let lengthOfString=s.length;
  let errorCount=0
  for (let i=0;i<s.length;i++){
    if(s[i]>"a" && s[i]>"m"){
      errorCount+=1;
     
    }

  }
  
       return `${ errorCount}/${lengthOfString}`;
  
  
  
}