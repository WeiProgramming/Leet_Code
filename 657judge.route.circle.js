/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let right = 0;
    let left = 0;
    let up = 0;
    let down = 0;
    
    Array.from(moves).forEach((letter)=>{
        if(letter === "R"){
            right++;
        } 
        if(letter === "L"){
            left++;
        } 
        if(letter === "U"){
            up++;
        } 
        if(letter === "D"){
            down++;
        } 
    });
    if((right===left) && (up===down)){
        return true;
    }
    return false;
};