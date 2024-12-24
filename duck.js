// we start  by tapping each player (starting from one ) one by one until we choose goose
// if we reach the end, we go back to the beginning  
//return the player name we stopped on 
//The player tapped on goose is the one chosen
function duckDuckGoose(players, goose) {
    let index=0;     // the game begins with the first player at index=0 who starts tapping on other players at index 1, which is why our i starts from 1
    for(let i=1; i<goose;i++){  // starting from the first tap not counting the initial player
        index++;
        if(index>=players.length){
            index=0;
        }
    }
    return players[index].name;
    
    }
    let ourPlayers=[{name:"Philly" }, {name:"Jude"}, {name:"Shaun"}];
    console.log(duckDuckGoose(ourPlayers,1)); 
      