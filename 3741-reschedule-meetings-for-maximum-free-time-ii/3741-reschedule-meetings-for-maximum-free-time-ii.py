class Solution:
    def maxFreeTime(self, eventTime: int, startTime: List[int], endTime: List[int]) -> int:
        n = len(startTime)
        gaps = []
        gaps.append(startTime[0] - 0)
        for i in range(1,n):
            gaps.append(startTime[i] - endTime[i-1])
        gaps.append(eventTime - endTime[-1])
        prefix = [0] * (n)
        suffix = [0] * (n)
        for i in range(1,n):
            prefix[i] = max(prefix[i-1],gaps[i-1])
        for i in range(n-2,-1,-1):
            suffix[i] = max(suffix[i+1],gaps[i+2])
        ans = 0
        for i in range(n):
            d = endTime[i] - startTime[i]
            if d <= prefix[i] or d <= suffix[i]:
                ans = max(ans,gaps[i] + d + gaps[i+1])
            ans = max(ans,gaps[i] + gaps[i+1])
        return ans
        


        