const binaryArrayToNumber = arr => {
    
    let joined=arr.join('');
  let final= parseInt(joined,2);
    return final;
  };

  console.log(binaryArrayToNumber([0, 0, 0, 1]));