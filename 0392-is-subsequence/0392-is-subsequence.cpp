class Solution {
public:
    bool isSubsequence(string s, string t) {
        int m = s.length(), n = t.length();
        int j = 0;
        
        if(m == 0) return true;
        
        for(int i = 0 ; i < n; i++){
            if(t[i] == s[j]){
                j++;
                if(j == m){
                    return true;
                }
            }
        }
        return false;
    }
};