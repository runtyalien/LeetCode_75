/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    
    for(let ch of magazine){
        if(!map.has(ch)){
            map.set(ch,1)
        } else {
            map.set(ch,map.get(ch)+1)
        }
    }
    
    for(let ch of ransomNote){
        if(!map.has(ch) || map.get(ch) === 0){
            return false
        } else {
            map.set(ch, map.get(ch)- 1)
        }
    }
    
    return true;
};