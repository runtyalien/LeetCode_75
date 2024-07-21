/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let return1 = "";
    
    let s2 = s.split('');
    for(let a of s){
        if(a !== 'i'){
            return1 += a;
        } else if(a === 'i'){
           return1 = return1.split('').reverse().join('');
            console.log(return1)
        }
    }
    
    return return1;
};