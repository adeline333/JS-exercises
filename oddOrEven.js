
const oddOrEven = (array) => {
    let sum=0;
    for(let num of array){
      sum+=num;
    }
      
      if(sum%2==0){
      return "even";
    }
    else{
      return "odd";
    }
    }