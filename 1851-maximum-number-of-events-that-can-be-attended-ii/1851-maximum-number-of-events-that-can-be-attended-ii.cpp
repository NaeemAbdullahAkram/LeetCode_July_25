class Solution {
public:
    vector<vector<int>> dp;

    int solve(int i, int k, vector<vector<int>>& e){
        if(k == 0 || i >= e.size()) return 0;

        if(dp[i][k] != -1) return dp[i][k];

        int ans = solve(i + 1, k, e); // Skip current event

        // Binary search to find the next non-overlapping event
        int l = i + 1, r = e.size() - 1, next = e.size();
        while (l <= r) {
            int mid = (l + r) / 2;
            if (e[mid][0] > e[i][1]) {
                next = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        // Take current event
        ans = max(ans, e[i][2] + solve(next, k - 1, e));

        return dp[i][k] = ans;
    }

    int maxValue(vector<vector<int>>& e, int k) {
        sort(e.begin(), e.end(), [](const vector<int>& a, const vector<int>& b){
            return a[0] < b[0];
        });

        dp = vector<vector<int>>(e.size(), vector<int>(k + 1, -1));
        return solve(0, k, e);
    }
};