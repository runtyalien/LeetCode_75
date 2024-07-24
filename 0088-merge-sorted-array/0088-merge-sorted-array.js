/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0;
    
    if(n === 0) return nums1;
    
    while( i < nums2.length){
        nums1[i+m] = nums2[i] ;
        i++;
    }
    
    nums1.sort((a,b) => a-b);
    
    return nums1;
};