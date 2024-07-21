/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
//     create a set
//     initialize a counter to calculate length of the substring
//      start from i = 0 to (s.length - 1) & j = 1 to (s.length)
//     start inserting the substrings into the set 
//     store length of substring in counter
//     if a substring already exists in the set increment the value of i and repeat

//     let setup = new Set();
//     let counter = 0;
    
//     for(let i = 0; i < s.length - 1; i++){
//         for(let j =  i + 1; j < s.length; j++){
//             let sub = s.substring(i,j);
//             if(!setup.has(sub)&& !setup.has(s[j])){
//             setup.add(sub);
//             console.log(setup)
//             counter = sub.length;
//             } else if(setup.has(s[i])){
//                 continue;
//             }
//         } if(setup.has(s[i])) continue;
//     }
    
//     return counter;
    
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let setup = new Set();
    
    while (right < s.length) {
        if (!setup.has(s[right])) {
            setup.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        } else {
            setup.delete(s[left]);
            left++;
        }
    }
    
    return maxLength;
    
};