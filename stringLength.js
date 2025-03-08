


function solution(str, ending){
  // TODO: complete
  
  if(ending.length>str.length){
    return false;
  }
    

  for (let i=0;i<ending.length;i++){

  if(str[str.length-ending.length+i] != ending[i]){
    return false;
    
  }
    }
   
      return true;
    
    
  }