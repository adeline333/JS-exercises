function greet(name){
    //your code here
    for(let i=0;i<name.length;i++){
      name[0]=name[0].toUpperCase();
    }
   
    return `Hello, ${name} how are you doing today?`
    
  }