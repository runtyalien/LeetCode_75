/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0;
    let str = s.split("");
    let arr = [];
    let min=0,max=0;
    
    for(let st of str){
        if(st == "(" || st == ")"){
            arr.push(st)
        }    
    }
    
    for(let a of arr){
        if(a == "("){
            count++;
        } else {
            count--;
        }
        
        if(count > max) max = count;
        
    }
    
    return max;
};