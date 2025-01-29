var isSquare = function(n){
  
    let num=Math.sqrt(n);
    if (Number.isInteger(num)){
      return true;
      
    }
    else{
      return false;
    }
  }