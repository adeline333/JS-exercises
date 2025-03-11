let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
  const transformKeys=(person)=>{
    let newObject={};
  
    for(let [keys,values] of Object.entries(person)){
        newObject[keys.toUpperCase()]=values;
    }
  return newObject;
  }
  console.log(transformKeys(person));