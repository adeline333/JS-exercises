function findShort(s){
            
    let ourArray=s.split(" ");                              
     let shortest= ourArray[0];
     let lengthOfShortest=shortest.length;
     
     for (let i=0;i< ourArray.length;i++){
       if ( ourArray[i].length<shortest.length){
         shortest= ourArray[i];
         lengthOfShortest=shortest.length;
       }
       
     }
     return lengthOfShortest;
   }