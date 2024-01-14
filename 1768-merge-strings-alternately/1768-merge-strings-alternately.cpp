class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int a = 0, b = 0;

        string merged = "";

        while(a < word1.size() || b < word2.size()){
            if(a < word1.size()){
                merged.push_back(word1[a++]);
            }
            if(b < word2.size()){
                merged.push_back(word2[b++]);
            }
        }
        return merged;
    }
};