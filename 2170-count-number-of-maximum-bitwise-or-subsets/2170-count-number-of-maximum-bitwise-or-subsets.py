class Solution:
    def countMaxOrSubsets(self, nums: List[int]) -> int:
        max_or = 0
        for num in nums:
            max_or |= num
        
        count = 0
        n = len(nums)


        for r in range(1, n+1):
            for subset in combinations(nums, r):
                or_value = 0
                for num in subset:
                    or_value |= num
                if or_value == max_or:
                    count += 1

        return count