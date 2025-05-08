function checkExam(array1, array2) {
    // good luck
     let totalScore=0;
     for(let i=0;i<array1.length;i++){
       
        if(array2[i]==""){
       totalScore+=0;
     }
       else if(array1[i]===array2[i]){
         totalScore+=4
       }
       else if(array1[i]!== array2[i]){
         totalScore-=1;}
      
     }
     
       if (totalScore<0) {
      totalScore=0;
       }
     
     return totalScore;
   }
   