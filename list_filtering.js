function filter_list(l) {
 
  
    let filtered= l.filter(function(element){
      return typeof(element)=="number";
    })
    
    return filtered;
  }
  filter_list([1,2,'a','b']);
//ANSER TO THE  22ND jAN EXERCISE
// REMOVE THE SMALLEST WITHOUT CHANGING THE ORIGINAL ARRAY
// IF THERE ARE TWO VALUES WHICH ARE BOTH MINIMUM , GET THE ONE WITH THE LOWEST INDEX
//ALS0, IF ARRAY IS EMPTY RETURN EMPTY ARRAY

//FIRST CHECK IF THE RRAY IS EMPTY and return it
// find the minimum element by looping
//for index loop, if tHE  Current number is equal to the minuimum one, break and return its index
// filter tghe array and remove the the value with that index


function removeSmallest(numbers) {
  if(numbers.length==0){
    return numbers;
  }

  let min=numbers[0];
  let lowestIndex=0;
  let newArray=[];
  
  
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]<min){
        min=numbers[i];
    }

    

    

  }

  for(let i=0;i<numbers.length;i++){
    
    if(numbers[i]==min){
        lowestIndex=i;
        break;
     }
    }

    

    newArray=numbers.filter(function (num, i){
      return i!=lowestIndex;
  });

  return newArray;
  }


console.log(removeSmallest([2, 2, 1, 2, 1]));


