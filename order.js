function order(words) {
    if (words === "") {
      return "";
    }
  
    let Allwords = words.split(" ");
  
    function getNumber(word) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] >= "0" && word[i] <= "9") {
          return Number(word[i]);
        }
      }
    }
  
    Allwords.sort((a, b) => {
      let numA = getNumber(a);
      let numB = getNumber(b);
      return numA - numB;
    });
  
    return Allwords.join(" ");
      
  }
    
    console.log(order("thi2s is3 a1 test4"));  
  console.log(order("wo3rld he1llo fr2om")); 
  console.log(order(""));                    
  