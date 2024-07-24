/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
        let result = "";
    let openCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (openCount > 0) {
                result += s[i];
            }
            openCount++;
        } else if (s[i] === ')') {
            openCount--;
            if (openCount > 0) {
                result += s[i];
            }
        }
    }
    
    return result;
};