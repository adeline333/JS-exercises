function take(arr, n) {
    return arr.slice(0,n);
   
  }
  const arr = [1, 2, 3, 4, 5];
  const firstThreeElements = take(arr, 3);
  console.log(firstThreeElements);