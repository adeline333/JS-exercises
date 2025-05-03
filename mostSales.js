function top3(products, amounts, prices) {   
    let revenueData=[];
      for(let i=0;i<products.length;i++){
      revenueData.push({
          name:products[i],
           revenue:amounts[i]*prices[i],
          index:i
               })
        }
        revenueData.sort(function(a,b){
          if(a.revenue==b.revenue){
            return a.index-b.index;
          }
          else{
            return b.revenue-a.revenue;
          }
        })
        
      let names=[];
      for(let i=0;i<3;i++){
        names.push(revenueData[i].name);
      }
    
    return names;
    
    }