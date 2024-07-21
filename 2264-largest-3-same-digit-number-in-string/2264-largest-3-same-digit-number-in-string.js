/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let goodString = '';
    
    for(let i = 0; i <= num.length  - 3; i++){
        let substring = num.substring(i, i+3);
        if(substring[0] === substring[1] && substring[1] === substring[2]){
            if(substring > goodString){
                goodString = substring;
            }
        }
    }
    
    return goodString;
};