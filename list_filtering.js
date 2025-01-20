function filter_list(l) {
 
  
    let filtered= l.filter(function(element){
      return typeof(element)=="number";
    })
    
    return filtered;
  }
  filter_list([1,2,'a','b']);