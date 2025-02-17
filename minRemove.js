
function removeSmallest(numbers) {
    if(numbers.length==0){
      return numbers;
    }
  
    let min=numbers[0];
    let lowestIndex=0;
    let newArray=[];
    
    
    for(let i=0;i<numbers.length;i++){
      if(numbers[i]<min){
          min=numbers[i];
      }
  
    }
  
    for(let i=0;i<numbers.length;i++){
      
      if(numbers[i]==min){
          lowestIndex=i;
          break;
       }
      }
  
      newArray=numbers.filter(function (num, i){
        return i!=lowestIndex;
    });
  
    return newArray;
    }
  
  