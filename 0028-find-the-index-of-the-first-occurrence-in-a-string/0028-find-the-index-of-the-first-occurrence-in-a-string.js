/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let s = needle.length;
    let p = haystack.length;
    let start = 0;
    
    while(start < p){
        let sub = haystack.substring(start, start+s);
        
        if(sub == needle){
            return start;
        }
        start++;
    }
    
    return -1;
};