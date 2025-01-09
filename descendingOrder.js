function descendingOrder(n){

    if(n<0){
      return 0;
    }
    
    else if (n>=0){
      let numberToString=n.toString();
      let NumberSplitToStringArray= numberToString.split('');
                               
      let sorted=NumberSplitToStringArray.sort((a,b)=>b-a);
      let sortedAndJoined= sorted.join("");
       return Number(sortedAndJoined);
    }
    
    
  }