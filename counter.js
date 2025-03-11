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
    