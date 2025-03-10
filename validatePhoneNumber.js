const validatePhoneNumber=(phoneNumber)=>{
    let count=0;
    for(let i=0;i<phoneNumber.length;i++){
        
           count++;
           
        }
       
    
    if(count==10){
        return true;
    }

    if(count==12 && (phoneNumber[4]=="-"|| phoneNumber[7]=='-'||
            phoneNumber[4]==" "||phoneNumber[7]==" ")){ 
             
    return true;
    }

    else{
        return false;
    }
}



console.log(validatePhoneNumber("1234567890")); // should return true
console.log(validatePhoneNumber("123-456-7890")); // should return true
console.log(validatePhoneNumber("123 456 7890")); // should return true
console.log(validatePhoneNumber("123-45-67890")); // should return false
console.log(validatePhoneNumber("1234-567890")); // should return false

