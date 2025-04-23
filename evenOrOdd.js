function evenOrOdd(str) {
    let numbers=str.split('');
    let sumEven=0
    let currentNum=0;
    
    let sumOdd=0;
    for(let i=0;i<numbers.length;i++){
       currentNum=Number(numbers[i]);
     if(currentNum%2==0){
       sumEven+=currentNum;
     }
      else if(currentNum%2!=0){
      sumOdd+=currentNum;
    }
    }
    if (sumEven>sumOdd){
      return "Even is greater than Odd";
    }
    else if(sumOdd>sumEven){
      return "Odd is greater than Even"
    }
  else {
    return "Even and Odd are the same"
  }
  
  }
  
  console.log(evenOrOdd('12'));
  console.log(evenOrOdd('123'));
  console.log(evenOrOdd('112'));