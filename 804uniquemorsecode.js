/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(s) {
        const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let result = [];
    for(let i = 0; i < s.length;i++){
        let message ="";
        for(let j = 0; j < s[i].length;j++){
            let asciiNum = s[i].charCodeAt(j)-97;
            message += morse[asciiNum];
        }
        result[i] = message;
    }//array translated
    console.log(result);
    let uniqueArr = [];
    uniqueArr[0] = result[0];
    let hasUnique = true;
    for(let i = 0; i < result.length; i++){
        hasUnique = true;
        for(let j = 0;j < uniqueArr.length;j++){
            if(uniqueArr[j] === result[i]){
                hasUnique = false;
            }
        }
        if(hasUnique){
            uniqueArr.push(result[i]);
        }
    }
    if(!uniqueArr[0]){
        return 0;
    }
    return uniqueArr.length;
};