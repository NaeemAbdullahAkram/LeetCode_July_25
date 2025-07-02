class Solution {
public:
    string predictPartyVictory(string s) {
        queue<int>q1,q2;
        for(int i=0;i<s.size();i++){
            if(s[i]=='R'){
                q1.push(i);
            }
            else{
                q2.push(i);
            }
            
        }
        int sz=s.size();
        while(!q1.empty()&&!q2.empty()){
            if(q1.front()<q2.front()){
                q1.push(sz++);
            }
            else{
                q2.push(sz++);
            }
            q1.pop(),q2.pop();
        }
        return q2.empty()?"Radiant":"Dire";
    }
};