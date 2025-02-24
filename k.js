const sumByCategory = (arr) => {
    const result = {};
  
    for (const { category, value } of arr) {
      // Check if the category exists in the result object
      if (result[category] === undefined) {
        result[category] = value;  // If category doesn't exist, set it to the value
      } else {
        result[category] += value;  // If category exists, add the value to it
      }
    }
  
    return result;
  };     

//   for (let num of numbers){

//   }


const data = [
      { category: 'A', value: 10 },
      { category: 'B', value: 20 },
      { category: 'A', value: 15 },
      { category: 'C', value: 5 },
      { category: 'B', value: 25 },
    ];
    
    const aggregated = sumByCategory(data);
    console.log(aggregated); // Output: { A: 25, B: 45, C: 5 }
  