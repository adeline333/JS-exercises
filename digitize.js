function digitize(n) {
    let numbers=[];
  let newArray=n.toString().split("");
  for(let i=0;i<newArray.length;i++){
    newArray[i]=Number(newArray[i]);
    numbers.push(newArray[i]);
  }

  let reversedArray=[];
  for(let i=numbers.length-1;i>=0;i--){
    reversedArray.push(numbers[i]);
  }
  return reversedArray;
}