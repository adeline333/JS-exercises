function accum(s) {
  
    // your code
let splitString=s.split("");
 
  let finalStrings=[];
  for(let i=0; i<splitString.length;i++){
    let newString="";
    newString+=splitString[i].toUpperCase()+splitString[i].toLowerCase().repeat(i);
   finalStrings.push(newString);
  }
  
  return finalStrings.join("-");
  
}
