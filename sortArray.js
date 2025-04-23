function sortArray(array) {
    let oddArray = [];
    let evenArray = [];
    if (array.length === 0) {
      return array;
    }
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0 || array[i] === 0) {
        evenArray.push(array[i]);
      } else {
        oddArray.push(array[i]);
      }
    }
  
    let sortedEven = evenArray.sort(function sorting(a, b) {
      return b - a;
    });
    let sortedOdd = oddArray.sort(function sorting(a, b) {
      return a - b;
    });
  
    let result = [];
    let oddIndex = 0;
    let evenIndex = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0 || array[i] === 0) {
        result.push(sortedEven[evenIndex]);
        evenIndex++;
      } else {
        result.push(sortedOdd[oddIndex]);
        oddIndex++;
      }
    }
  
    return result;
  }
  
  console.log(sortArray([5, 3, 2, 8, 1, 4, 11])); // [1, 3, 8, 4, 5, 2, 11]