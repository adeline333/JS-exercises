// // // const sumByCategory = (arr) => {
// // //     const result = {};
  
// // //     for (const { category, value } of arr) {
// // //       // Check if the category exists in the result object
// // //       if (result[category] === undefined) {
// // //         result[category] = value;  // If category doesn't exist, set it to the value
// // //       } else {
// // //         result[category] += value;  // If category exists, add the value to it
// // //       }
// // //     }
  
// // //     return result;
// // //   };     

// // //   for (let num of numbers){

// // //   }
// // //   //let {category, value} =  { category: 'A', value: 10 }
// // //   //


// // const sumByCategory = array=>{
// //     let newObj={ };
// //     for(const{category,value} of array){
// //         if(newObj[category]===undefined){
// //             newObj[category]=value;
// //         }
// //         else{
// //             newObj[category]+=value
// //         }
// //     }

// // return newObj;
// // }
// //   const data = [
// //     { category: 'A', value: 10 },
// //     { category: 'B', value: 20 },
// //     { category: 'A', value: 15 },
// //     { category: 'C', value: 5 },
// //     { category: 'B', value: 25 },
// //     { category: 'A', value: 5 }, // Adding duplicate 'A' category
// //     { category: 'B', value: 10 }  // Adding duplicate 'B' category
// //   ];
  
// //   const aggregated = sumByCategory(data);
// //   console.log(aggregated); 
// //   // Output: { A: 35, B: 55, C: 5 }
// //   // 'A' now sums up to 10 + 15 + 5 = 35
// //   // 'B' now sums up to 20 + 25 + 10 = 55
  

// const sumByCategory = (arr) => {
//   const result = {};

//   for (const { category, value } of arr) {
//     result[category] = (result[category] || 0) + value;
//   }

//   return result;
// };

// const data = [
//   { category: 'A', value: 10 },
//   { category: 'B', value: 20 },
//   { category: 'A', value: 15 },
//   { category: 'C', value: 5 },
//   { category: 'B', value: 25 },
// ];

// // const aggregated = aggregateByCategory(data);
// // console.log(aggregated); // Output: { A: 25, B: 45, C: 5 }

// const sumByCategory = (arr) => {
//     const result = {};
  
//     for (const { category, value } of arr) {
//       result[category] = (result[category] || 0) + value;
//     }
  
//     return result;
//   };
  
//   const data = [
//     { category: 'A', value: 10 },
//     { category: 'B', value: 20 },
//     { category: 'A', value: 15 },
//     { category: 'C', value: 5 },
//     { category: 'B', value: 25 },
//   ];
  
  // const aggregated = aggregateByCategory(data);
  // console.log(aggregated); // Output: { A: 25, B: 45, C: 5 }

//1

  //2

  let f1=[{id:1,name:"pasacsie"},
    {id:2,name:"pascal"}
]

const idName= arr =>
{
    let newObj={};
    for (let {id,name} of arr){
        newObj[id]= name;
    }
    return newObj;
}
console.log(idName(f1));

//3

const items = [
    { type: 'fruit' },
    { type: 'vegetable' },
    { type: 'fruit' },
    { type: 'fruit' },
    { type: 'vegetable' },
    { type: 'grain' },
  ];
  

const ourFunc=(items)=>{
    let newObj={};
 

    for(let {type} of items){
        if(newObj[type]===undefined){
            newObj[type]=0;
        }
        else{
            newObj[type]+=1;
        }
            
    }
    return newObj;

}
console.log(ourFunc(items));

//4
const people = [
    { name: 'Alice', age: 16 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 17 },
    { name: 'David', age: 25 },
  ];
  
  const adults=(people)=>{
    let newArray=[];
    for(let {name,age} of people ){
        if(age>=18){
           newArray.push(name.toUpperCase());
        }
    }
    return newArray;
  }
  // const adults = filterAndMap(people);
 console.log(adults(people)); // Output: ['BOB', 'DAVID']

 //5
 const nestedArray = [1, [2, 3], 4, [2, [5, 1]], 3];
 const func1=(nest)=>{
    let flattened=nest.flat();
    let fla=[];
    for(let num of flattened){
         fla = flattened.sort(function sort(a,b){
            return a-b;
         })
      

        
    }
    return fla;
 }
 console.log(func1(nestedArray));