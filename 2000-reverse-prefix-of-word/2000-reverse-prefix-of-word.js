/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let index = word.indexOf(ch);
    
    if(index == -1) return word;
    
    let reverse = word.slice(0,index+1).split("").reverse().join('');
    
    let reversedWord = reverse + word.slice(index+1);
    
    return reversedWord;
};