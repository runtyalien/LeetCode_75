/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map1 = new Map();
    let n = nums.length;
    
    for(let num of nums){
        if(!map1.has(num)){
            map1.set(num,1)
        } else {
            map1.set(num,map1.get(num)+1)
        }
    }
    
    for(let [key,value] of map1){
        if(value > Math.floor(n/2)){
            return key;
        }
    }
};