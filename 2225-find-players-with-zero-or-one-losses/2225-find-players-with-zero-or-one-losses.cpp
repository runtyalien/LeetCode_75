class Solution {
public:
    vector<vector<int>> findWinners(vector<vector<int>>& matches) {
        unordered_map<int,int> wins, losses;
        vector<int> no_loss, one_loss;
        
        for(const auto& match : matches){
            ++wins[match[0]];
            ++losses[match[1]];
        }
        
        for(const auto& player : wins){
            if(losses.count(player.first) == 0){
                no_loss.push_back(player.first);
            } else if(losses[player.first] == 1){
                one_loss.push_back(player.first);
            }
        }
        
        for(const auto& player : losses){
            if(wins.count(player.first) == 0 && player.second == 1){
                one_loss.push_back(player.first);
            }
        }
        
        sort(no_loss.begin(), no_loss.end());
        sort(one_loss.begin(), one_loss.end());
        
        return {no_loss, one_loss};
    }
};
