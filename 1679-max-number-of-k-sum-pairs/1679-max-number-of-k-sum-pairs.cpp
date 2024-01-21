class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
        int cnt = 0;
        unordered_map<int,int>complements;
        
        for(int num:nums){
            if(complements[k-num] > 0){
                cnt++;
                complements[k-num]--;
            } else {
                complements[num]++;
            }
        }
        return cnt;
    }
};