function cutIt(arr){
    //coding here...
    let shortestStringLength=arr[0].length;
    for(let i=0; i<arr.length;i++){
      if(arr[i].length < shortestStringLength){
       shortestStringLength=arr[i].length;
      }
      
    }
    let sliced=[];
  for(let i=0;i<arr.length;i++){
   sliced.push(arr[i].slice(0,shortestStringLength));
  
  }
  
  return sliced;
  

  }
  