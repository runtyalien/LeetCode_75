/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    const n = nums.length;
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[minIndex]) {
            minIndex = i;
        }
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        }
    }

    const fromLeft = Math.max(minIndex, maxIndex) + 1;
    const fromRight = n - Math.min(minIndex, maxIndex);
    const fromBoth = (Math.min(minIndex, maxIndex) + 1) + (n - Math.max(minIndex, maxIndex));

    return Math.min(fromLeft, fromRight, fromBoth);
};