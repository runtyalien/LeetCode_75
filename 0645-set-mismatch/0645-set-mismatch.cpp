class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        vector<int>count(nums.size(), 0);
        vector<int>res(2, 0);
        
        for(int i = 0; i < nums.size(); i++){
            count[nums[i]-1]++;
        }
        
        for(int i = 0; i < count.size(); i++){
            if(count[i] == 0){
                res[1] = i + 1;
            }
            if(count[i] == 2){
                res[0] = i+1;
            }
        }
        return res;
    }
};