function gimme (triplet) {

    let first=triplet[0];
    let second=triplet[1];
    let third=triplet[2];
    
    let sorted= triplet.sort(function sorting(a,b){
      return a-b;
    });
  
    
    
    if(sorted[1]==first){
      return 0;
    }
     else if(sorted[1]==second){
      return 1;
    }
     else if (sorted[1]==third) {
      return 2;
    }
  }