/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let str = s.split("");
    
    let left = 0;
    let right = str.length-1;
    
    const isVowel = (a) => {
        return "aeiouAEIOU".includes(a);
    }
    
    while(left < right){
        if(isVowel(str[left]) && isVowel(str[right])){
            [str[left], str[right]] = [str[right], str[left]];
            left++;
            right--;
        } else if(isVowel(str[left]) && !isVowel(str[right])){
            right--;
        } else if(!isVowel(str[left]) && isVowel(str[right])){
            left++;
        } else{
            left++;
            right--;
        }
    }
    
    return str.join("");
};