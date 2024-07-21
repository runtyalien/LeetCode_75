/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let result = [];
    let isReversed = false;
    
    for(let ch of s){
        if(ch === 'i'){
            isReversed = !isReversed;
        } else {
            if(isReversed){
                result.unshift(ch);
            } else {
                result.push(ch)
            }
        }
    }
    
    return isReversed ? result.reverse().join('') : result.join('');
};