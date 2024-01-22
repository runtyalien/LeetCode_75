class Solution {
public:
    int majorityElement(vector<int>& nums) {
    //     int count = 0;
    // int candidate = 0;

    // for (int num : nums) {
    //     if (count == 0) {
    //         candidate = num;
    //     }
    //     count += (num == candidate) ? 1 : -1;
    // }

    // return candidate;

    sort(nums.begin(), nums.end());

    int n = nums.size();
    return nums[n/2];
    }
};