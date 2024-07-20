/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let str = s.split(" ");
    let size1 = str.length;
    let returnStr = "";
    let count = 0;
    
    while(count < k){
        if (count > 0) {
            returnStr += " ";
        }
        returnStr += str[count];
        count++;
    }
    
    return returnStr;
};