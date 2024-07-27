/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let index;
    if(nums.length === 1){
        index = 0;
    } else {    
    for(let i = 0; i < nums.length; i++){
        if((i === 0 && nums[i] > nums[i+1]) || (i === nums.length-1 && nums[i-1] < nums[i])){
            index = i;
        } else if(nums[i] > nums[i-1] && nums[i] > nums[i+1]){
            index = i;
        }
    }
    }
    return index;
};