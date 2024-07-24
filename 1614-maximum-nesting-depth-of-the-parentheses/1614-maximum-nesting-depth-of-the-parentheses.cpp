class Solution {
public:
    int maxDepth(string s) {
        stack<char>st;
        int count = 0;
        int max = 0;
        
        for(int i = 0; i < s.size(); i++){
            if(s[i] != '(' && s[i] != ')'){
                continue;
            }
            
            if(s[i] == '('){
                st.push(s[i]);
                max++;
                if(max > count) count = max;
            } else if(s[i] == ')'){
                st.pop();
                max--;
            }
        }
        
        return count;
    }
};