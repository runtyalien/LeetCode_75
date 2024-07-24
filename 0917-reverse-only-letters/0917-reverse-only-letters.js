/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
let left = 0; 
    let right = s.length - 1;

    const isLetter = (char) => {
        return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
    }

    const sArray = s.split('');

    while (left < right) {
        if (!isLetter(sArray[left])) {
            left++;
        } else if (!isLetter(sArray[right])) {
            right--;
        } else {
            [sArray[left], sArray[right]] = [sArray[right], sArray[left]];
            left++;
            right--;
        }
    }

    return sArray.join('');
};