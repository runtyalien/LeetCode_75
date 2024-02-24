class Solution {
public:
    int smallestEqual(vector<int>& nums) {
        bool seen[10] = {}; 

        for (int i = 0; i < nums.size(); ++i) {
        if (i % 10 == nums[i]) {
            return i;
        }
    }
    return -1;
    }
};