/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let word11 = word1.join("");
    let word22 = word2.join("");
    
    return (word11 === word22);
};