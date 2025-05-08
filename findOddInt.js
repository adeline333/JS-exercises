function findOdd(A) {
    //happy coding!
   let  newArray=[];
    for (let i=0;i<A.length;i++){
      if (!newArray.includes(A[i])){
        newArray.push(A[i])
      }
    }
    let count=0;
    let value=0;
    for (let i=0;i<A.length;i++){
        for (let j=0;j<newArray.length;j++){  
          if(newArray[j]==A[i]){
            count+=1;
          }
       }
      if(count%2!==0){
       value= A[i];
      }
    }
    
    return value;
   
  
  }