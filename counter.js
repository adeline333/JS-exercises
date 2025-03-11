function createCounter (){
    let count=0;
    
          function counterFn(){
                count++;
                return count;
        };
            return counterFn;
    }
    const counter1 = createCounter(); // Create a counter instance
    const counter2 = createCounter(); 
    
    console.log(counter1()); 
    console.log(counter1()); 
    console.log(counter1()); 
    
    //An instance is a new copy pf something. When you create an instance of createCounter(), ech one keeps track of its own count
//without instances the counter resets evertime you call the function
//creating an instance lets you have multiple counters, each with its own separate count

//When you return counterFn;, you're returning the function itself so you can call it later. 
//If you used counterFn();, it would immediately run and return the result, which means you wouldn't be able to call it again.