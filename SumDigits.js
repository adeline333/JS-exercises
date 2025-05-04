function sumDigits(number) {
    let num = Math.abs(number).toString(); 
let digit=num.split('');

    let sum=0;
    for (let i=0;i<digit.length;i++){
      sum+=Number(digit[i]);  
    }
    
    return sum;
  }