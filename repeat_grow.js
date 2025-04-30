function repeatStr(n, s) {
    return s.repeat(n);
  }
  function grow(x){
    let  result=1;
   for(let i=0;i<x.length;i++){
     result*=x[i];
   }
     return result;
   }