function duplicateCount(text){
  //...
  
  //loop through the string
  //create new Array, if the strig doesnt exist in the array, push it 
  
  //loop through the new aray, start the counter
  //loop through the original, increment the counter
  //if count>1 return that value 
  let newArray=[];
  for(let i=0;i<text.length;i++){
    if(!newArray.includes(text[i])){
      newArray.push(text[i]);
    }
  }

let num=0;
for(let i=0;i<newArray.length;i++){
  let count=0;
  for(let j=0;j<text.length;j++){
    if(text[j]==newArray[i]){
    count+=1;
      }
  }

  if(count>1){
    return count;
  }
  
  }
  
  }