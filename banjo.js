function areYouPlayingBanjo(name) {
  
    let answer=""
    if(name[0].toUpperCase()=="R"){
      answer= name + " plays banjo"
    }
    else{
        answer= name + " does not play banjo";
    }
    return answer;
  }