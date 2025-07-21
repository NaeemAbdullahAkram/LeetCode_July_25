class Solution {
public:
    string makeFancyString(string s) {
        int n = s.size();
        if(n == 1) return s;
        string ans = "";
        ans += s[0];
        ans += s[1];
        for(int i = 2; i < n ; ++i){
            if(!((s[i] == s[i - 1])&&(s[i - 1] == s[i - 2]))) ans += s[i];
        }
        return ans;
    }
};