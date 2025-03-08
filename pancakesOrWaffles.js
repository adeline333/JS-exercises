function censor(sentence1) {
    let wordLength = 0;
    let asterisk = "*";
    let sentence = sentence1.split(" ");
    
  
    let hasWaffles = sentence.includes("waffles") || sentence.includes("Waffles");
  
    for (let i = 0; i < sentence.length; i++) {
   
      if (
        sentence[i] == "pancakes" || sentence[i] == "flapjacks" || sentence[i] == "slapjacks" || sentence[i] == "hotcakes" ||
        sentence[i] == "Pancakes" || sentence[i] == "Flapjacks" || sentence[i] == "Slapjacks" || sentence[i] == "Hotcakes"
      ) {
        wordLength = sentence[i].length;
        sentence[i] = asterisk.repeat(wordLength);
      }
  
      if (
        sentence[i] == "waffles" || sentence[i] == "crepes" || sentence[i] == "blintzes" ||
        sentence[i] == "Waffles" || sentence[i] == "Crepes" || sentence[i] == "Blintzes"
      ) {
        sentence[i] = "**" + sentence[i] + "**";
      }
  
   
      if (
        sentence[i] == "syrup" || sentence[i] == "honey" || sentence[i] == "jam" || sentence[i] == "butter" || sentence[i] == "chocolate" || sentence[i] == "margarine" ||
        sentence[i] == "Syrup" || sentence[i] == "Honey" || sentence[i] == "Jam" || sentence[i] == "Butter" || sentence[i] == "Chocolate" || sentence[i] == "Margarine"
      ) {
        if (hasWaffles) {
        
          sentence[i] = "**" + sentence[i] + "**";
        } else {
          
          wordLength = sentence[i].length;
          sentence[i] = asterisk.repeat(wordLength);
        }
      }
    }
    
    return sentence.join(" ");
  }