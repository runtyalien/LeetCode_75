/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);  

    // let minLen = Math.min(nums1.length, nums2.length);
    let arr = [];
    let count = 0;
    let num1 = 0;
    let num2 = 0;
    
    while(num1 < nums1.length && num2 < nums2.length){
        if(nums1[num1]  === nums2[num2]){
            arr.push(nums1[num1]);
            num1++;
            num2++;
         } else if(nums1[num1] < nums2[num2]){
             num1++;
         } else {
             num2++;
         }
    }
    
    return arr;
};