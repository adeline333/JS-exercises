function deleteNth(arr,n){
    // ...
    let newArr=[];
  
   
    for(let i=0;i<arr.length;i++){
      let count=0;
      let currentNum=arr[i];
           for(let j=0;j<newArr.length;j++){
            if(newArr[j]==currentNum)
           {
             count++;
           }
         
           }
       
           if(count<n){
            newArr.push(currentNum);
        }  
      }
     
    
    return newArr;
  }
  
  console.log(deleteNth([20,37,20,21], 1));// [20,37,21]