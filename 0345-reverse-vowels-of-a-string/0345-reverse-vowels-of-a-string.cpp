class Solution {
public:
    bool isVowel(char c){
            return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || 
               c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U';
    }
    
    string reverseVowels(string s) {
        int i = 0, j = s.size() - 1;
        
        while(i < j){
            if(!isVowel(s[i])){
                i++;
                continue;
            }
            if(!isVowel(s[j])){
                j--;
                continue;
            }
            swap(s[i++], s[j--]);
        }
        return s;
    }
    
};