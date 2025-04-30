function nameShuffler(str){
  
    let name=str.split(' ').reverse().join(' ');
     return name;
   }


   //refractored solution
   function nameShuffler(str){
     
     let splitString= str.split(' ');
     
     let name=`${splitString[splitString.length-1]} ${splitString[0]}`;
     return  name;
     
   }