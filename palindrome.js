
function isPalindrome(x) {
  let reversed="";
  for(let i=x.length-1;i>=0;i--){
 reversed+=x[i];
    
  }
  if (reversed.toLowerCase()===x.toLowerCase()){
    return true
  }
  else{
    return false;
  }
    
}
console.log(isPalindrome("hello"));