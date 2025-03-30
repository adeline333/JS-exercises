function findAverage(array) {
    // your code here
    let average=0;
    let sum=0;
  
    if(array.length!==0){
    for(let i=0;i<array.length;i++){
      sum+=array[i];
      
    }
    average=sum/(array.length);
    return average;
    }
    
    else{
      return 0;
    }
    
  }