/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0;
    let max = 0;
    
    for(let ch of s){
        if(ch == "("){
            count++;
            if(count > max) max = count;
        } else if(ch == ")"){
            count--;
        }   
    }
    return max;
};