class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int size = nums.size();
        vector<int> l(size, 1), r(size, 1), result(size);
        
        for(int i = 1; i < size; i++){
            l[i] = l[i-1] * nums[i-1];
        }
        
        for(int i = size - 2 ; i >=0 ; i--){
            r[i] = r[i+1] * nums[i+1];
        }
        
        
        for(int i = 0; i < size; i++){
            result[i] = l[i] * r[i];
        }
        
        return result;
    }
};