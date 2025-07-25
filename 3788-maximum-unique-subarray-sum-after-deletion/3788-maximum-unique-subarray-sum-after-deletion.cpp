class Solution {
public:
    int maxSum(vector<int>& nums) {
        
        int n = nums.size();
        sort(nums.begin(),nums.end());
        vector<int> ans;
        ans.push_back(nums[0]);
        for(int i=1;i<n;i++){
            if(nums[i]!=nums[i-1])
                ans.push_back(nums[i]);
        }
        int ms=INT_MIN;
        int cs =0;
        int n1 =ans.size();
        for(int i=0;i<n1;i++){
            cs =cs+ans[i];
            ms=max(cs,ms);
            if(cs<0)
                cs=0;
        }
        return ms;
    }
};