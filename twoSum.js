function twoSum(numbers, target) {
 
    let num1=0;
    let sum=0;
    let num2=0;
    let newArray=[];
    for(let i=0;i<numbers.length;i++){
       num1=numbers[i];
          for(let j=0;j<numbers.length;j++){
              num2=numbers[j];
              sum=num1+num2;
              if((i!==j)&&(sum==target)){
               return[i,j];
            }
          }
            
  
    }
  
     
    
    
  }