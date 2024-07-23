/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
let nums1 = [];
    k = k % nums.length;

    for (let i = nums.length - k; i < nums.length; i++) {
        nums1.push(nums[i]);
    }
    
    for (let i = 0; i < nums.length - k; i++) {
        nums1.push(nums[i]);
    }
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums1[i];
    }
};