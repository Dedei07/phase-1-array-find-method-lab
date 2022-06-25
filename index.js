// code your solution here
function superbowlWin(array){
    let game = (possibility) => {
        return (possibility.result == 'W')
        }
       
    let score = array.find(game);
    if (score === undefined){
        return undefined;
    }else{
        return score.year;
    }
   
}